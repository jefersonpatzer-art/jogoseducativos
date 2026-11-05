// ============================================================
// SERVIDOR BACKEND (API REST FOR MYSQL)
// Dependências necessárias: npm install express mysql2 cors
// ============================================================

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite requisições vindas de qualquer link (inclusive GitHub Pages)
app.use(express.json());

const db = mysql.createPool({
    host: process.env.MYSQLHOST || 'iriguchi.proxy.rlwy.net',
    port: process.env.MYSQLPORT || 58507, // Porta de 5 dígitos do Railway
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'WxTabLGohyNQooAqRlUpdcOMlSKMsAFc',
    database: process.env.MYSQLDATABASE || 'notas_Jogos_educativos', // Ou o nome do Schema que você criou no Workbench
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// TESTAR CONEXÃO COM O BANCO DE DADOS
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('✅ Conectado com sucesso ao MySQL no Railway!');
        connection.release();
    }
});

// ROTA HTTP POST: Recebe a nota enviada pelo jogo do aluno
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

// INICIAR SERVIDOR NA PORTA 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando e aguardando notas na porta ${PORT}`);
});
fetch('https://jogoseducativos-production.up.railway.app/api/salvar-nota', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registro)
})
.then(response => response.json())
.then(data => console.log('✅ Nota salva com sucesso no MySQL:', data))
.catch(error => console.error('❌ Erro ao enviar nota:', error));
