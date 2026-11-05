const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Permite requisições vindas do GitHub Pages sem bloqueio de CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Conexão com o Banco de Dados MySQL no Railway
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

// Testar conexão ao iniciar
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('✅ Conectado com sucesso ao MySQL no Railway!');
        connection.release();
    }
});

// Rota padrão para teste no navegador
app.get('/', (req, res) => {
    res.send('API do Quiz está online e pronta para receber notas!');
});

// Rota HTTP POST para receber e gravar a nota do aluno
app.post('/api/salvar-nota', (req, res) => {
    const { nome, numero, turma, acertos, nota } = req.body;

    if (!nome || !numero || !turma) {
        return res.status(400).json({ error: 'Dados incompletos!' });
    }

    const sql = `INSERT INTO notas_quiz (nome, numero, turma, acertos, nota) VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [nome, numero, turma, acertos, nota], (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).json({ error: 'Erro ao salvar a nota.' });
        }

        console.log(`📥 Nota registrada: ${nome} (${turma}) - Nota: ${nota}`);
        res.status(201).json({ message: 'Nota registrada com sucesso!', id: result.insertId });
    });
});

// Inicia o servidor na porta informada pela nuvem
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
