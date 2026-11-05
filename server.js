const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Configuração irrestrita de CORS para comunicação com o GitHub Pages
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Conexão com a base de dados MySQL no Railway via Pool
const db = mysql.createPool({
    host: process.env.MYSQLHOST || 'iriguchi.proxy.rlwy.net',
    port: process.env.MYSQLPORT || 58507,
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'WxTabLGohyNQooAqRlUpdcOMlSKMsAFc',
    database: process.env.MYSQLDATABASE || 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste inicial de conexão
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('✅ Conectado com sucesso ao MySQL no Railway!');
        connection.release();
    }
});

// Rota de verificação do estado da API
app.get('/', (req, res) => {
    res.send('API do Quiz Robô da Lógica está online!');
});

// Rota POST para persistência das notas
app.post('/api/salvar-nota', (req, res) => {
    const { nome, numero, turma, acertos, nota } = req.body;

    if (!nome || !numero || !turma) {
        return res.status(400).json({ error: 'Dados incompletos!' });
    }

    const sql = `INSERT INTO notas_quiz (nome, numero, turma, acertos, nota) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [nome, numero, turma, acertos, nota], (err, result) => {
        if (err) {
            console.error('❌ Erro ao inserir no banco:', err);
            return res.status(500).json({ error: 'Erro ao salvar a nota.' });
        }

        console.log(`📥 Nota registrada: ${nome} (Nº ${numero} - ${turma}) | Nota: ${nota}`);
        res.status(201).json({ message: 'Nota registrada com sucesso!', id: result.insertId });
    });
});

// Inicialização do servidor escutando em 0.0.0.0
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
