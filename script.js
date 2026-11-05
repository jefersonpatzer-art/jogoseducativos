/* --------------------------------------------------------------------------
   7. GRAVAÇÃO NO BANCO DE DADOS (LOCALSTORAGE E MYSQL RAILWAY) E EXPORTAÇÃO CSV
   -------------------------------------------------------------------------- */
function finalizarProvaEGravarNota() {
    tocarSom('acerto');
    dispararConfeti();

    const notaFinal = ((quizPontuacao / CONFIG_PROFESSOR.quiz.length) * 10).toFixed(1);
    
    // 1. Objeto com os dados do aluno
    const registro = {
        nome: dadosAluno.nome || "Anônimo",
        numero: Number(dadosAluno.numero) || 0,
        turma: dadosAluno.turma || "Geral",
        acertos: quizPontuacao,
        nota: parseFloat(notaFinal)
    };

    // 2. Salva localmente no navegador (fallback)
    let historico = JSON.parse(localStorage.getItem('historico_quiz_consolata') || '[]');
    historico.push({ ...registro, data: new Date().toLocaleString('pt-BR') });
    localStorage.setItem('historico_quiz_consolata', JSON.stringify(historico));

    // 3. ENVIO HTTP POST PARA O BACKEND NO RAILWAY (MYSQL)
    fetch('https://jogoseducativos-production.up.railway.app/api/salvar-nota', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registro)
    })
    .then(response => response.json())
    .then(data => console.log('✅ Nota salva com sucesso no MySQL:', data))
    .catch(error => console.error('❌ Erro ao enviar nota para o MySQL:', error));

    // 4. Atualiza os dados no Modal de Resultados
    document.getElementById('res-aluno-nome').innerText = `Estudante: ${registro.nome} (Nº ${registro.numero})`;
    document.getElementById('res-aluno-turma').innerText = `Turma: ${registro.turma}`;
    document.getElementById('res-nota-final').innerText = `Nota Final: ${notaFinal}`;
    document.getElementById('res-acertos-detalhe').innerText = `Acertos: ${quizPontuacao} de ${CONFIG_PROFESSOR.quiz.length} questões (1,0 pt cada)`;

    document.getElementById('modal-vitoria').classList.remove('hidden');
    falarTexto(`Parabéns, ${registro.nome}! Você concluiu a prova com nota ${notaFinal}!`);
}
