/* ==========================================================================
   SCRIPT.JS - LÓGICA DO JOGO, QUIZ, SINTETIZADOR DE VOZ E BANCO DE DADOS
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. ÁREA DE CONFIGURAÇÃO DO PROFESSOR (DADOS DOS PRODUTOS E DO QUIZ)
   -------------------------------------------------------------------------- */
const CONFIG_PROFESSOR = {
    // Produtos da Calculadora Sensorial do Mercadinho
    produtos: [
        { id: 1, nome: "Sorvete", preco: 3, icone: "🍦" },
        { id: 2, nome: "Suco", preco: 2, icone: "🧃" },
        { id: 3, nome: "Pão", preco: 1, icone: "🍞" },
        { id: 4, nome: "Pipoca", preco: 4, icone: "🍿" },
        { id: 5, nome: "Maçã", preco: 2, icone: "🍎" },
        { id: 6, nome: "Pizza", preco: 5, icone: "🍕" }
    ],

    // 10 Questões adaptadas da Prova de Recuperação de Ed. Digital Consolata
    quiz: [
        {
            pergunta: "Q1. O robô da loja recebe a quantidade de jogos. Essa informação entra primeiro como:",
            iconePergunta: "🔤",
            respostaCorreta: "Texto (str), pois vem do teclado",
            dica: "Tudo o que você digita no teclado entra primeiro como uma palavra ou texto!",
            opcoes: [
                { texto: "Texto (str), pois vem do teclado", icone: "🔤" },
                { texto: "Número (int) automático", icone: "🔢" },
                { texto: "Verdadeiro ou Falso (bool)", icone: "☑️" },
                { texto: "Decimal (float)", icone: "🪙" }
            ]
        },
        {
            pergunta: "Q2. Qual dessas etapas é a de PROCESSAMENTO (quando o robô faz as contas da excursão)?",
            iconePergunta: "🧠",
            respostaCorreta: "Fazer a conta de divisão do valor",
            dica: "Processamento é o momento exato em que a cabeça do robô calcula as contas!",
            opcoes: [
                { texto: "Fazer a conta de divisão do valor", icone: "➕" },
                { texto: "Perguntar o total ao aluno", icone: "🗣️" },
                { texto: "Mostrar a resposta na tela", icone: "🖥️" },
                { texto: "Ler o nome da escola", icone: "🏫" }
            ]
        },
        {
            pergunta: "Q3. Se o número de vagas é 0 e o código tem SE vagas > 0, o que aparece na tela?",
            iconePergunta: "🚫",
            respostaCorreta: "Nenhuma mensagem é exibida",
            dica: "Como zero não é maior que zero, o comando SE não é cumprido e nada é mostrado!",
            opcoes: [
                { texto: "Nenhuma mensagem é exibida", icone: "🚫" },
                { texto: "Mostra 'Há vagas disponíveis'", icone: "✅" },
                { texto: "Mostra um erro vermelho", icone: "⚠️" },
                { texto: "Mostra o número zero", icone: "0️⃣" }
            ]
        },
        {
            pergunta: "Q4. Para verificar SE tem pontos dá o prêmio, SENÃO pede mais pontos, qual estrutura usamos?",
            iconePergunta: "🔀",
            respostaCorreta: "if ... else (SE ... SENÃO)",
            dica: "Usamos o SE (if) para o acerto e o SENÃO (else) para a alternativa!",
            opcoes: [
                { texto: "if ... else (SE ... SENÃO)", icone: "🔀" },
                { texto: "while (ENQUANTO)", icone: "🔄" },
                { texto: "for (PARA CADA)", icone: "🔁" },
                { texto: "list (LISTA)", icone: "📦" }
            ]
        },
        {
            pergunta: "Q5. Qual é a vantagem de guardar os esportes em uma LISTA (baú)?",
            iconePergunta: "📦",
            respostaCorreta: "Guardar vários itens na mesma estrutura",
            dica: "Uma lista permite colocar muitos elementos juntos no mesmo lugar!",
            opcoes: [
                { texto: "Guardar vários itens na mesma estrutura", icone: "📦" },
                { texto: "Limitar para só poder 1 esporte", icone: "🛑" },
                { texto: "Apagar todas as caixas", icone: "🗑️" },
                { texto: "Mudar as cores da tela", icone: "🎨" }
            ]
        },
        {
            pergunta: "Q6. Qual comando mágico empurra um novo filme para o FINAL da lista?",
            iconePergunta: "➕",
            respostaCorreta: "filmes.append('Animação')",
            dica: "O comando append adiciona o elemento no final da fila da lista!",
            opcoes: [
                { texto: "filmes.append('Animação')", icone: "➕" },
                { texto: "filmes.remove('Animação')", icone: "➖" },
                { texto: "filmes.pop()", icone: "💥" },
                { texto: "filmes[0] = 'Animação'", icone: "1️⃣" }
            ]
        },
        {
            pergunta: "Q7. Por que usamos laços de repetição (for/while) para somar vendas?",
            iconePergunta: "🔄",
            respostaCorreta: "Para passar por todos os itens automaticamente",
            dica: "O laço de repetição percorre toda a lista sem precisar fazer conta por conta manualmente!",
            opcoes: [
                { texto: "Para passar por todos os itens automaticamente", icone: "🔄" },
                { texto: "Para transformar números em letras", icone: "🔤" },
                { texto: "Para apagar a lista de vendas", icone: "❌" },
                { texto: "Para criar uma lista vazia", icone: "🈳" }
            ]
        },
        {
            pergunta: "Q8. Qual comando repete o menu de opções ENQUANTO o cliente não clicar em 'Sair'?",
            iconePergunta: "⏳",
            respostaCorreta: "while (ENQUANTO)",
            dica: "Usamos o WHILE quando a repetição depende de uma escolha do usuário para parar!",
            opcoes: [
                { texto: "while (ENQUANTO)", icone: "⏳" },
                { texto: "for (PARA)", icone: "🔢" },
                { texto: "if (SE)", icone: "❓" },
                { texto: "input (ENTRADA)", icone: "⌨️" }
            ]
        },
        {
            pergunta: "Q9. A lista de pontos do basquete vai aumentando. Como somar tudo mesmo se a lista crescer?",
            iconePergunta: "🏀",
            respostaCorreta: "Usar repetição para percorrer a lista inteira",
            dica: "O laço de repetição calcula a soma completa, não importa quantos itens entram na lista!",
            opcoes: [
                { texto: "Usar repetição para percorrer a lista inteira", icone: "🔄" },
                { texto: "Escrever nova soma no código toda hora", icone: "📝" },
                { texto: "Criar uma caixa diferente para cada ponto", icone: "📦" },
                { texto: "Mostrar a lista antes de somar", icone: "👀" }
            ]
        },
        {
            pergunta: "Q10. No cadastro da catraca, por que usar o laço WHILE até digitarem a palavra 'fim'?",
            iconePergunta: "🎟️",
            respostaCorreta: "Porque não sabemos quantas pessoas vão entrar",
            dica: "Quando não sabemos o número exato de repetições com antecedência, o WHILE é ideal!",
            opcoes: [
                { texto: "Porque não sabemos quantas pessoas vão entrar", icone: "🎟️" },
                { texto: "Porque só podem entrar 10 pessoas", icone: "🔟" },
                { texto: "Porque ele transforma nomes em números", icone: "🔢" },
                { texto: "Porque proíbe nomes repetidos", icone: "⛔" }
            ]
        }
    ]
};

/* --------------------------------------------------------------------------
   2. ESTADO GLOBAL DO JOGO (VARIAVEIS DE CONTROLE DE DADOS)
   -------------------------------------------------------------------------- */
let dadosAluno = { nome: "", numero: "", turma: "" };
let carrinho = {}; // Guarda as quantidades dos produtos no Mercadinho { idProduto: qtd }
let pagamentoSelecionado = 'Pix';

let quizIndiceAtual = 0;
let quizPontuacao = 0;

/* --------------------------------------------------------------------------
   3. SINTETIZADOR DE VOZ (WEB SPEECH API) E SINTETIZADOR SONORO (WEB AUDIO API)
   -------------------------------------------------------------------------- */
function falarTexto(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = 'pt-BR';
        fala.rate = 0.9;
        fala.pitch = 1.1;
        window.speechSynthesis.speak(fala);
    }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function tocarSom(tipo) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const agora = audioCtx.currentTime;

    if (tipo === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, agora);
        osc.frequency.exponentialRampToValueAtTime(700, agora + 0.08);
        gain.gain.setValueAtTime(0.2, agora);
        gain.gain.linearRampToValueAtTime(0, agora + 0.08);
        osc.start(agora);
        osc.stop(agora + 0.08);
    } else if (tipo === 'acerto') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, agora);
        osc.frequency.setValueAtTime(659.25, agora + 0.1);
        osc.frequency.setValueAtTime(783.99, agora + 0.2);
        gain.gain.setValueAtTime(0.3, agora);
        gain.gain.linearRampToValueAtTime(0, agora + 0.4);
        osc.start(agora);
        osc.stop(agora + 0.4);
    } else if (tipo === 'erro') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, agora);
        osc.frequency.setValueAtTime(170, agora + 0.15);
        gain.gain.setValueAtTime(0.3, agora);
        gain.gain.linearRampToValueAtTime(0, agora + 0.3);
        osc.start(agora);
        osc.stop(agora + 0.3);
    }
}

/* --------------------------------------------------------------------------
   4. SALVAMENTO DO CADASTRO DO ESTUDANTE
   -------------------------------------------------------------------------- */
function salvarCadastro(event) {
    event.preventDefault();
    tocarSom('acerto');

    const nome = document.getElementById('cad-nome').value.trim();
    const numero = document.getElementById('cad-numero').value.trim();
    const turma = document.getElementById('cad-turma').value;

    if (!nome || !numero || !turma) return;

    dadosAluno = { nome, numero, turma };
    document.getElementById('identificacao-aluno').innerText = `Aluno: ${nome} (Nº ${numero}) - ${turma}`;
    document.getElementById('tela-cadastro').classList.add('hidden');

    renderizarProdutos();
    falarTexto(`Bem-vindo, ${nome}! Você está cadastrado. Vamos aprender brincando!`);
}

/* --------------------------------------------------------------------------
   5. LÓGICA DA CALCULADORA SENSORIAL E MERCADINHO
   -------------------------------------------------------------------------- */
function renderizarProdutos() {
    const grid = document.getElementById('grid-produtos');
    grid.innerHTML = '';

    CONFIG_PROFESSOR.produtos.forEach(prod => {
        const qtd = carrinho[prod.id] || 0;
        const card = document.createElement('div');
        card.className = `bg-slate-50 border-4 border-slate-200 rounded-3xl p-4 flex flex-col items-center justify-between shadow-md transition-all ${qtd > 0 ? 'card-selected' : ''}`;
        card.innerHTML = `
            <div class="text-6xl mb-2">${prod.icone}</div>
            <div class="font-bold text-emerald-950 text-xl">${prod.nome}</div>
            <div class="bg-amber-200 text-amber-950 px-3 py-1 rounded-full text-sm font-bold my-2">R$ ${prod.preco},00</div>
            <div class="flex items-center gap-3 mt-2 bg-white px-3 py-1.5 rounded-2xl border-2 border-slate-200">
                <button onclick="alterarQuantidade(${prod.id}, -1)" class="w-10 h-10 bg-rose-500 text-white font-bold text-2xl rounded-xl flex items-center justify-center btn-bounce">-</button>
                <span class="font-bold text-2xl text-slate-800 w-8 text-center">${qtd}</span>
                <button onclick="alterarQuantidade(${prod.id}, 1)" class="w-10 h-10 bg-emerald-500 text-white font-bold text-2xl rounded-xl flex items-center justify-center btn-bounce">+</button>
            </div>
        `;
        grid.appendChild(card);
    });

    atualizarResumoCompra();
}

function alterarQuantidade(idProduto, delta) {
    tocarSom('click');
    const qtdAtual = carrinho[idProduto] || 0;
    const novaQtd = Math.max(0, qtdAtual + delta);
    if (novaQtd === 0) delete carrinho[idProduto];
    else carrinho[idProduto] = novaQtd;

    renderizarProdutos();
}

function selecionarPagamento(metodo) {
    tocarSom('click');
    pagamentoSelecionado = metodo;
    document.querySelectorAll('.btn-pagamento').forEach(btn => btn.classList.remove('card-selected'));
    document.getElementById(`pay-${metodo}`).classList.add('card-selected');
    falarTexto(`Pagamento em ${metodo}`);
    atualizarResumoCompra();
}

function calcularTotal() {
    let total = 0;
    for (let id in carrinho) {
        const prod = CONFIG_PROFESSOR.produtos.find(p => p.id == id);
        if (prod) total += prod.preco * carrinho[id];
    }
    return total;
}

function atualizarResumoCompra() {
    const total = calcularTotal();
    const containerMoedas = document.getElementById('container-moedas');
    containerMoedas.innerHTML = '';

    if (total === 0) {
        containerMoedas.innerHTML = '<span class="text-amber-700 text-sm">Adicione produtos para ver as moedas!</span>';
    } else {
        for (let i = 0; i < total; i++) {
            const moeda = document.createElement('span');
            moeda.className = 'text-3xl animate-bounce';
            moeda.style.animationDelay = `${i * 0.05}s`;
            moeda.innerHTML = '🪙';
            containerMoedas.appendChild(moeda);
        }
    }

    const textoResumo = document.getElementById('resumo-compra-texto');
    const itensNomes = [];
    for (let id in carrinho) {
        const prod = CONFIG_PROFESSOR.produtos.find(p => p.id == id);
        if (prod) itensNomes.push(`${carrinho[id]}x ${prod.nome}`);
    }

    if (itensNomes.length === 0) {
        textoResumo.innerHTML = "Nenhum item selecionado.";
    } else {
        textoResumo.innerHTML = `${itensNomes.join(', ')} = <span class="text-amber-600 font-extrabold">R$ ${total},00</span> (${pagamentoSelecionado})`;
    }
}

function ouvirResumoCompra() {
    const total = calcularTotal();
    falarTexto(`Sua compra tem o valor total de ${total} reais pagando no ${pagamentoSelecionado}.`);
}

function finalizarCompra() {
    tocarSom('acerto');
    dispararConfeti();
    ouvirResumoCompra();
}

/* --------------------------------------------------------------------------
   6. LÓGICA DO QUIZ DE LÓGICA DE PROGRAMAÇÃO
   -------------------------------------------------------------------------- */
function renderizarPerguntaQuiz() {
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];

    document.getElementById('quiz-numero-questao').innerText = `Questão ${quizIndiceAtual + 1} de ${CONFIG_PROFESSOR.quiz.length}`;
    document.getElementById('quiz-pergunta-icone').innerText = q.iconePergunta || "❓";
    document.getElementById('quiz-pergunta-texto').innerText = q.pergunta;

    const grid = document.getElementById('quiz-opcoes-grid');
    grid.innerHTML = '';

    q.opcoes.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "bg-slate-50 border-4 border-sky-200 hover:border-sky-400 rounded-3xl p-5 flex flex-col items-center btn-bounce shadow-md";
        btn.onclick = () => verificarRespostaQuiz(opt.texto);
        btn.innerHTML = `
            <span class="text-5xl mb-2">${opt.icone}</span>
            <span class="font-bold text-sky-950 text-lg text-center">${opt.texto}</span>
        `;
        grid.appendChild(btn);
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.className = "mt-6 p-4 rounded-2xl text-center font-bold text-xl hidden";
}

function ouvirPerguntaAtual() {
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];
    falarTexto(q.pergunta);
}

function darDicaPerguntaAtual() {
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];
    tocarSom('click');
    falarTexto("Dica: " + q.dica);
}

function verificarRespostaQuiz(opcaoSelecionada) {
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (opcaoSelecionada === q.respostaCorreta) {
        tocarSom('acerto');
        quizPontuacao++;

        feedback.className = "mt-6 p-4 rounded-2xl text-center font-bold text-2xl bg-emerald-100 text-emerald-900 border-2 border-emerald-400 animate-bounce";
        feedback.innerHTML = "✨ CORRETO! (+1,0 Ponto) 🎉";
        falarTexto("Muito bem! Resposta correta!");

        setTimeout(() => {
            if (quizIndiceAtual < CONFIG_PROFESSOR.quiz.length - 1) {
                quizIndiceAtual++;
                renderizarPerguntaQuiz();
                ouvirPerguntaAtual();
            } else {
                finalizarProvaEGravarNota();
            }
        }, 1800);

    } else {
        tocarSom('erro');
        feedback.className = "mt-6 p-4 rounded-2xl text-center font-bold text-2xl bg-rose-100 text-rose-900 border-2 border-rose-400";
        feedback.innerHTML = "Ops! Tente novamente! 💡 Ouça a Dica Mágica!";
        falarTexto("Ops! Tente novamente! Ouça a dica!");
    }
}

/* --------------------------------------------------------------------------
   7. GRAVAÇÃO NO BANCO DE DADOS LOCAL (LOCALSTORAGE) E EXPORTAÇÃO CSV
   -------------------------------------------------------------------------- */
function finalizarProvaEGravarNota() {
    tocarSom('acerto');
    dispararConfeti();

    const notaFinal = ((quizPontuacao / CONFIG_PROFESSOR.quiz.length) * 10).toFixed(1);
    const registro = {
        nome: dadosAluno.nome || "Anônimo",
        numero: dadosAluno.numero || "0",
        turma: dadosAluno.turma || "Geral",
        acertos: quizPontuacao,
        nota: notaFinal,
        data: new Date().toLocaleString('pt-BR')
    };

    let historico = JSON.parse(localStorage.getItem('historico_quiz_consolata') || '[]');
    historico.push(registro);
    localStorage.setItem('historico_quiz_consolata', JSON.stringify(historico));

    document.getElementById('res-aluno-nome').innerText = `Estudante: ${registro.nome} (Nº ${registro.numero})`;
    document.getElementById('res-aluno-turma').innerText = `Turma: ${registro.turma} | Data: ${registro.data}`;
    document.getElementById('res-nota-final').innerText = `Nota Final: ${notaFinal}`;
    document.getElementById('res-acertos-detalhe').innerText = `Acertos: ${quizPontuacao} de ${CONFIG_PROFESSOR.quiz.length} questões (1,0 pt cada)`;

    document.getElementById('modal-vitoria').classList.remove('hidden');
    falarTexto(`Parabéns, ${registro.nome}! Você concluiu a prova com nota ${notaFinal}!`);
}

function baixarRelatorioCSV() {
    let historico = JSON.parse(localStorage.getItem('historico_quiz_consolata') || '[]');
    if (historico.length === 0) {
        alert("Nenhuma nota registrada ainda!");
        return;
    }

    let csv = "Nome;Numero;Turma;Acertos;Nota_Final;Data_Hora\n";
    historico.forEach(r => {
        csv += `"${r.nome}";"${r.numero}";"${r.turma}";${r.acertos};${r.nota};"${r.data}"\n`;
    });

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "relatorio_notas_escola_digital.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function abrirPainelProfessor() {
    tocarSom('click');
    let historico = JSON.parse(localStorage.getItem('historico_quiz_consolata') || '[]');
    const tbody = document.getElementById('tabela-notas-body');
    tbody.innerHTML = '';

    if (historico.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-500">Nenhum registro de nota encontrado.</td></tr>`;
    } else {
        historico.forEach(r => {
            const tr = document.createElement('tr');
            tr.className = "border-b hover:bg-slate-50";
            tr.innerHTML = `
                <td class="p-2 border">${r.numero}</td>
                <td class="p-2 border font-bold">${r.nome}</td>
                <td class="p-2 border">${r.turma}</td>
                <td class="p-2 border text-center">${r.acertos}/10</td>
                <td class="p-2 border text-center font-bold text-emerald-600">${r.nota}</td>
                <td class="p-2 border text-xs">${r.data}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('modal-professor').classList.remove('hidden');
}

function fecharPainelProfessor() {
    document.getElementById('modal-professor').classList.add('hidden');
}

function limparHistoricoNotas() {
    if (confirm("Tem certeza que deseja apagar o histórico de notas de todos os alunos?")) {
        localStorage.removeItem('historico_quiz_consolata');
        abrirPainelProfessor();
    }
}

function reiniciarQuiz() {
    quizIndiceAtual = 0;
    quizPontuacao = 0;
    document.getElementById('modal-vitoria').classList.add('hidden');
    renderizarPerguntaQuiz();
    ouvirPerguntaAtual();
}

/* --------------------------------------------------------------------------
   8. NAVEGAÇÃO ENTRE ABAS
   -------------------------------------------------------------------------- */
function trocarAba(aba) {
    tocarSom('click');
    const secMercadinho = document.getElementById('sec-mercadinho');
    const secQuiz = document.getElementById('sec-quiz');
    const btnMercadinho = document.getElementById('aba-mercadinho');
    const btnQuiz = document.getElementById('aba-quiz');

    if (aba === 'mercadinho') {
        secMercadinho.classList.remove('hidden');
        secQuiz.classList.add('hidden');
        btnMercadinho.className = "py-3 px-4 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-2 btn-bounce bg-emerald-500 text-white shadow-lg";
        btnQuiz.className = "py-3 px-4 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-2 btn-bounce bg-white text-emerald-800 hover:bg-emerald-200";
        falarTexto("Mercadinho.");
    } else {
        secMercadinho.classList.add('hidden');
        secQuiz.classList.remove('hidden');
        btnQuiz.className = "py-3 px-4 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-2 btn-bounce bg-sky-500 text-white shadow-lg";
        btnMercadinho.className = "py-3 px-4 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-2 btn-bounce bg-white text-emerald-800 hover:bg-emerald-200";
        renderizarPerguntaQuiz();
        ouvirPerguntaAtual();
    }
}

/* Atalho de Teclado (CTRL + SHIFT + E) para Baixar CSV Rapidamente */
window.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        baixarRelatorioCSV();
    }
});

/* Efeito Visual de Confetis em Canvas */
function dispararConfeti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettis = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 5)],
        size: Math.random() * 8 + 4,
        speed: Math.random() * 4 + 2
    }));

    let animId;
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettis.forEach(c => {
            c.y += c.speed;
            if (c.y > canvas.height) c.y = -10;
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
        });
        animId = requestAnimationFrame(animar);
    }
    animar();
    setTimeout(() => { cancelAnimationFrame(animId); ctx.clearRect(0,0,canvas.width,canvas.height); }, 3500);
}
function enviarNotaParaMySQL(registro) {
    // Substitua pelo endereço do seu servidor de API
    fetch('https://SUA_API_URL.com/api/salvar-nota', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: registro.nome,
            numero: registro.numero,
            turma: registro.turma,
            acertos: registro.acertos,
            nota: registro.nota
        })
    })
    .then(response => response.json())
    .then(data => console.log('Sucesso ao gravar no MySQL:', data))
    .catch(error => console.error('Erro ao enviar nota:', error));
}
