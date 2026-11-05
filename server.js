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

// CONFIGURAÇÃO DA CONEXÃO COM O MYSQL (Nuvem ou Local)
const db = mysql.createPool({
    host: 'SEU_HOST_AQUI',       // Ex: mysql.aivencloud.com ou localhost
    port: 3306,                  // Porta padrão MySQL (ou a fornecida pelo provedor)
    user: 'SEU_USUARIO_AQUI',    // Ex: root ou avnadmin
    password: 'SUA_SENHA_AQUI',  // Sua senha do MySQL
    database: 'escola_digital',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// TESTAR CONEXÃO COM O BANCO DE DADOS
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('✅ Conectado com sucesso ao MySQL Workbench!');
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
