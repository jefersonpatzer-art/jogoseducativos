/* ==========================================================================
   SCRIPT.JS - PREPARATÓRIO POR NÍVEIS, QUIZ VARIADO (A, B, C, D) E MYSQL
   ========================================================================== */

const CONFIG_PROFESSOR = {
    // Desafios organizados por Níveis
    desafiosVisuais: [
        {
            id: 1,
            nivel: 1,
            nivelNome: "Nível 1 🐣",
            titulo: "Entrada de Dados (Entrar)",
            icone: "🍎 ➡️ 🤖",
            conceito: "Entrada (Input)",
            instrucaoVoz: "Desafio Nível 1: Vamos alimentar o robô! Clique no botão para dar a maçã para ele!",
            elementoIncial: "🍎",
            acaoAnimada: "🤖 😋 *Nham Nham! O robô recebeu a maçã!*",
            corBg: "from-amber-400 to-orange-500"
        },
        {
            id: 2,
            nivel: 1,
            nivelNome: "Nível 1 🐣",
            titulo: "Saída de Dados (Mostrar)",
            icone: "🤖 ➡️ ❤️",
            conceito: "Saída (Print)",
            instrucaoVoz: "Desafio Nível 1: Clique no botão para fazer o robô mostrar um coração na tela!",
            elementoIncial: "🖥️ ❓",
            acaoAnimada: "🖥️ ❤️ *O robô mostrou o coração feliz!*",
            corBg: "from-pink-400 to-rose-500"
        },
        {
            id: 3,
            nivel: 2,
            nivelNome: "Nível 2 🚦",
            titulo: "Escolha e Decisão (Se / Senão)",
            icone: "🚦 🤖",
            conceito: "Decisão (If / Else)",
            instrucaoVoz: "Desafio Nível 2: Sinal verde, o robô anda! Sinal vermelho, o robô para! Clique para testar!",
            elementoIncial: "🔴 🤖 🛑 (Parado)",
            acaoAnimada: "🟢 🤖 💨 (Andando!)",
            corBg: "from-emerald-400 to-teal-600"
        },
        {
            id: 4,
            nivel: 3,
            nivelNome: "Nível 3 🚀",
            titulo: "Guardar no Baú (Lista)",
            icone: "🧸 ➡️ 📦",
            conceito: "Adicionar na Lista (.append)",
            instrucaoVoz: "Desafio Nível 3: Guarde o ursinho dentro do baú mágico clicando no botão!",
            elementoIncial: "🧸   📦 (Fora)",
            acaoAnimada: "📦 [🧸] (Ursinho guardado no Baú!)",
            corBg: "from-purple-400 to-indigo-600"
        },
        {
            id: 5,
            nivel: 3,
            nivelNome: "Nível 3 🚀",
            titulo: "Repetir a Dança (Laço)",
            icone: "🔄 💃",
            conceito: "Repetição (While / Loop)",
            instrucaoVoz: "Desafio Nível 3: Clique no botão para fazer o robô dançar sem parar!",
            elementoIncial: "🤖 (Parado)",
            acaoAnimada: "🕺🤖💃 (Dançando sem parar!)",
            corBg: "from-sky-400 to-blue-600"
        }
    ],

    // Introdução do Quiz
    quizIntroducao: {
        titulo: "🤖 Quiz de Lógica do Robô",
        texto: "Ouça cada pergunta e escolha a imagem correta para ajudar nosso robô amigo!",
        figuras: "🤖 🌟 🏆"
    },

    // 10 Questões com respostas corretas distribuídas entre A, B, C e D
    quiz: [
        {
            pergunta: "Q1. Quando você digita uma mensagem no teclado, o que entra para o robô?",
            iconePergunta: "⌨️",
            respostaCorreta: "Texto e Letras", // POSIÇÃO: A
            dica: "Tudo o que a gente digita no teclado entra como letras e texto!",
            opcoes: [
                { letra: "A", texto: "Texto e Letras", icone: "🔤" },
                { letra: "B", texto: "Som de Música", icone: "🎵" },
                { letra: "C", texto: "Pintura de Tintas", icone: "🎨" },
                { letra: "D", texto: "Suco de Frutas", icone: "🧃" }
            ]
        },
        {
            pergunta: "Q2. Em qual lugar o robô pensa e faz as continhas?",
            iconePergunta: "🧠",
            respostaCorreta: "No Processamento (Pensando)", // POSIÇÃO: B
            dica: "A cabecinha do robô usa o processamento para pensar e calcular!",
            opcoes: [
                { letra: "A", texto: "Na caixa de som", icone: "🔊" },
                { letra: "B", texto: "No Processamento (Pensando)", icone: "🧠" },
                { letra: "C", texto: "Na tomada de energia", icone: "🔌" },
                { letra: "D", texto: "No tapete do chão", icone: "🪑" }
            ]
        },
        {
            pergunta: "Q3. Para o robô mostrar um coração feliz na tela, usamos o comando de:",
            iconePergunta: "🖥️",
            respostaCorreta: "Mostrar na Tela (Saída)", // POSIÇÃO: C
            dica: "O comando de saída faz o robô mostrar desenhos e mensagens na tela!",
            opcoes: [
                { letra: "A", texto: "Apagar a luz", icone: "🧹" },
                { letra: "B", texto: "Fechar os olhos", icone: "🙈" },
                { letra: "C", texto: "Mostrar na Tela (Saída)", icone: "🖥️" },
                { letra: "D", texto: "Dormir uma soneca", icone: "😴" }
            ]
        },
        {
            pergunta: "Q4. No sinal VERMELHO (🔴), o que o robô deve fazer?",
            iconePergunta: "🚦",
            respostaCorreta: "Parar imediatamente!", // POSIÇÃO: D
            dica: "Sinal vermelho é para parar! O robô só anda no verde!",
            opcoes: [
                { letra: "A", texto: "Sair correndo bem rápido", icone: "🏃" },
                { letra: "B", texto: "Dar cambalhotas", icone: "🤸" },
                { letra: "C", texto: "Voar como avião", icone: "✈️" },
                { letra: "D", texto: "Parar imediatamente!", icone: "🛑" }
            ]
        },
        {
            pergunta: "Q5. SE tiver comida, o robô come. SENÃO, ele vai brincar. Que comando faz essa escolha?",
            iconePergunta: "🔀",
            respostaCorreta: "SE ... SENÃO (Escolha)", // POSIÇÃO: B
            dica: "Usamos o SE para uma escolha e o SENÃO para a outra!",
            opcoes: [
                { letra: "A", texto: "Chorar alto", icone: "😭" },
                { letra: "B", texto: "SE ... SENÃO (Escolha)", icone: "🔀" },
                { letra: "C", texto: "Girar em círculos", icone: "🌀" },
                { letra: "D", texto: "Desligar tudo", icone: "❌" }
            ]
        },
        {
            pergunta: "Q6. Qual é o melhor lugar para guardar vários brinquedos juntos?",
            iconePergunta: "📦",
            respostaCorreta: "No Baú de Brinquedos (Lista)", // POSIÇÃO: C
            dica: "A lista é como um baú onde cabem muitos itens juntos!",
            opcoes: [
                { letra: "A", texto: "Na lixeira", icone: "🗑️" },
                { letra: "B", texto: "No copo de água", icone: "🥛" },
                { letra: "C", texto: "No Baú de Brinquedos (Lista)", icone: "📦" },
                { letra: "D", texto: "Na poça de lama", icone: "🌧️" }
            ]
        },
        {
            pergunta: "Q7. Para colocar um ursinho NO FINAL do baú de brinquedos, o que fazemos?",
            iconePergunta: "🧸",
            respostaCorreta: "Guardar no Final (.append)", // POSIÇÃO: A
            dica: "O comando append empurra o brinquedo novo para o final do baú!",
            opcoes: [
                { letra: "A", texto: "Guardar no Final (.append)", icone: "➕" },
                { letra: "B", texto: "Jogar o baú fora", icone: "💥" },
                { letra: "C", texto: "Quebrar o ursinho", icone: "💔" },
                { letra: "D", texto: "Pintar de preto", icone: "🎨" }
            ]
        },
        {
            pergunta: "Q8. Para o robô dar 3 pulinhos ou dançar sem parar, usamos o comando de:",
            iconePergunta: "💃",
            respostaCorreta: "Repetir (Girar em Loop)", // POSIÇÃO: D
            dica: "O laço de repetição faz a mesma ação várias vezes sem cansar!",
            opcoes: [
                { letra: "A", texto: "Ficar estátua parado", icone: "🗿" },
                { letra: "B", texto: "Sumir da tela", icone: "👻" },
                { letra: "C", texto: "Dormir no chão", icone: "🛌" },
                { letra: "D", texto: "Repetir (Girar em Loop)", icone: "🔄" }
            ]
        },
        {
            pergunta: "Q9. O robô vai dançar ENQUANTO tocar a música. Qual é esse comando?",
            iconePergunta: "⏳",
            respostaCorreta: "ENQUANTO (while)", // POSIÇÃO: B
            dica: "O WHILE repete a brincadeira até a música parar!",
            opcoes: [
                { letra: "A", texto: "Parar de vez", icone: "🛑" },
                { letra: "B", texto: "ENQUANTO (while)", icone: "⏳" },
                { letra: "C", texto: "Pular só 1 vez", icone: "1️⃣" },
                { letra: "D", texto: "Fechar a porta", icone: "🚪" }
            ]
        },
        {
            pergunta: "Q10. Quando não sabemos quantas crianças vão entrar, o robô deixa entrar até dizerem 'FIM':",
            iconePergunta: "🎟️",
            respostaCorreta: "Repetir até dizer Fim", // POSIÇÃO: C
            dica: "Usamos o laço ENQUANTO até alguém falar a palavra mágica FIM!",
            opcoes: [
                { letra: "A", texto: "Só deixa 1 criança entrar", icone: "1️⃣" },
                { letra: "B", texto: "Proíbe todo mundo de brincar", icone: "🚫" },
                { letra: "C", texto: "Repetir até dizer Fim", icone: "🎟️" },
                { letra: "D", texto: "Muda a cor da parede", icone: "🟦" }
            ]
        }
    ]
};

let dadosAluno = { nome: "", numero: "", turma: "" };
let quizIndiceAtual = 0;
let quizPontuacao = 0;
let nivelFiltroAtual = 0; // 0 = Todos
let progressoDesafios = new Set(); // Guarda os IDs dos desafios já testados

/* --------------------------------------------------------------------------
   FUNÇÕES DE ÁUDIO E VOZ PROTEGIDAS CONTRA ERROS
   -------------------------------------------------------------------------- */
function falarTexto(texto) {
    try {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const fala = new SpeechSynthesisUtterance(texto);
            fala.lang = 'pt-BR';
            fala.rate = 0.85;
            fala.pitch = 1.1;
            window.speechSynthesis.speak(fala);
        }
    } catch (e) {
        console.warn('Síntese de voz indisponível ou bloqueada:', e);
    }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function tocarSom(tipo) {
    try {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const agora = audioCtx.currentTime;

        if (tipo === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450, agora);
            gain.gain.setValueAtTime(0.2, agora);
            osc.start(agora);
            osc.stop(agora + 0.1);
        } else if (tipo === 'acerto') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, agora);
            osc.frequency.setValueAtTime(659.25, agora + 0.1);
            gain.gain.setValueAtTime(0.3, agora);
            osc.start(agora);
            osc.stop(agora + 0.35);
        } else if (tipo === 'erro') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, agora);
            gain.gain.setValueAtTime(0.3, agora);
            osc.start(agora);
            osc.stop(agora + 0.25);
        }
    } catch (e) {
        console.warn('Áudio Web indisponível:', e);
    }
}

/* --------------------------------------------------------------------------
   CADASTRO BLINDADO (GARANTE O FECHAMENTO DO MODAL)
   -------------------------------------------------------------------------- */
function salvarCadastro(event) {
    if (event) event.preventDefault();

    try {
        const nomeInput = document.getElementById('cad-nome');
        const numeroInput = document.getElementById('cad-numero');
        const turmaInput = document.getElementById('cad-turma');

        if (!nomeInput || !numeroInput || !turmaInput) {
            console.error("Campos do formulário não encontrados!");
            return;
        }

        const nome = nomeInput.value.trim();
        const numero = numeroInput.value.trim();
        const turma = turmaInput.value.trim();

        if (!nome || !numero || !turma) return;

        // 1. Salva os dados no objeto global
        dadosAluno = { nome, numero, turma };

        // 2. Atualiza a identificação no topo
        const identElem = document.getElementById('identificacao-aluno');
        if (identElem) {
            identElem.innerText = `Estudante: ${nome} (Nº ${numero}) - ${turma}`;
        }

        // 3. OCULTA O MODAL DE CADASTRO
        const telaCad = document.getElementById('tela-cadastro');
        if (telaCad) {
            telaCad.classList.add('hidden');
        }

        // 4. Efeitos sonoros e renderização
        tocarSom('acerto');
        renderizarDesafiosVisuais();
        falarTexto(`Olá, ${nome}! Vamos brincar e aprender com o Robô! Escolha um nível para começar!`);

    } catch (err) {
        console.error("Erro no cadastro:", err);
        
        // Força a ocultação da tela mesmo se houver erro visual/áudio
        const telaCad = document.getElementById('tela-cadastro');
        if (telaCad) telaCad.classList.add('hidden');
    }
}
/* Lógica de Níveis e Progresso na Aba 1 */
function filtrarNivel(nivel) {
    tocarSom('click');
    nivelFiltroAtual = nivel;

    [0, 1, 2, 3].forEach(lvl => {
        const btn = document.getElementById(`btn-lvl-${lvl}`);
        if (btn) {
            if (lvl === nivel) {
                btn.className = "px-4 py-2 rounded-2xl font-bold text-sm bg-slate-800 text-white shadow-md btn-bounce";
            } else {
                btn.className = "px-4 py-2 rounded-2xl font-bold text-sm bg-white text-slate-700 hover:bg-emerald-100 shadow-sm btn-bounce";
            }
        }
    });

    renderizarDesafiosVisuais();
}

function renderizarDesafiosVisuais() {
    const grid = document.getElementById('grid-produtos');
    if (!grid) return;
    grid.innerHTML = '';

    const listaFiltrada = nivelFiltroAtual === 0 
        ? CONFIG_PROFESSOR.desafiosVisuais 
        : CONFIG_PROFESSOR.desafiosVisuais.filter(d => d.nivel === nivelFiltroAtual);

    listaFiltrada.forEach(desafio => {
        const concluido = progressoDesafios.has(desafio.id);
        const card = document.createElement('div');
        card.className = `bg-gradient-to-b ${desafio.corBg} rounded-3xl p-6 flex flex-col justify-between shadow-2xl text-white transform transition duration-300 hover:scale-105 border-4 ${concluido ? 'border-yellow-400' : 'border-white'}`;

        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-3">
                    <span class="bg-black/30 px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1">
                        <span>${desafio.nivelNome}</span> • <span>${desafio.conceito}</span>
                    </span>
                    <div class="flex items-center gap-1">
                        ${concluido ? '<span class="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded-full text-xs font-black shadow">⭐ FEITO</span>' : ''}
                        <button onclick="falarTexto('${desafio.instrucaoVoz}')" 
                                class="bg-white/30 hover:bg-white/50 p-2 rounded-full text-xl transition btn-bounce" title="Ouvir instrução">
                            🔊
                        </button>
                    </div>
                </div>

                <h3 class="font-extrabold text-2xl mb-2 drop-shadow-md">${desafio.titulo}</h3>
                <div class="text-6xl text-center my-4 drop-shadow-lg animate-pulse">${desafio.icone}</div>

                <div id="palco-animacao-${desafio.id}" 
                     class="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center font-bold text-lg min-h-[70px] flex items-center justify-center border-2 border-white/40 mb-4">
                    ${desafio.elementoIncial}
                </div>
            </div>

            <button onclick="executarAnimacaoDesafio(${desafio.id})" 
                    class="w-full bg-white text-slate-900 font-extrabold py-3 px-4 rounded-2xl text-xl flex items-center justify-center gap-2 btn-bounce shadow-lg hover:bg-amber-300 transition">
                ▶️ Tocar para Fazer!
            </button>
        `;
        grid.appendChild(card);
    });

    atualizarBarraProgresso();
}

function executarAnimacaoDesafio(idDesafio) {
    tocarSom('acerto');
    const desafio = CONFIG_PROFESSOR.desafiosVisuais.find(d => d.id === idDesafio);
    if (!desafio) return;

    progressoDesafios.add(idDesafio);

    const palco = document.getElementById(`palco-animacao-${idDesafio}`);
    if (palco) {
        palco.className = "bg-amber-300 text-slate-900 font-extrabold rounded-2xl p-4 text-center text-xl min-h-[70px] flex items-center justify-center border-4 border-amber-500 animate-bounce shadow-lg";
        palco.innerText = desafio.acaoAnimada;
    }

    falarTexto(desafio.acaoAnimada.replace(/[*]/g, ''));
    renderizarDesafiosVisuais();
}

function atualizarBarraProgresso() {
    const total = CONFIG_PROFESSOR.desafiosVisuais.length;
    const feitos = progressoDesafios.size;
    const porc = Math.round((feitos / total) * 100);

    const txtEstrelas = document.getElementById('txt-estrelas');
    const barra = document.getElementById('barra-progresso');

    if (txtEstrelas) txtEstrelas.innerText = `⭐ ${feitos} / ${total} Concluídos`;
    if (barra) barra.style.width = `${porc}%`;
}

/* Lógica do Quiz */
function renderizarPerguntaQuiz() {
    const intro = CONFIG_PROFESSOR.quizIntroducao;
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];

    const introBox = document.getElementById('quiz-introducao-box');
    if (introBox) {
        introBox.innerHTML = `
            <div class="bg-sky-100 border-4 border-sky-300 rounded-3xl p-4 mb-4 text-sky-950 flex items-center justify-between shadow-md">
                <div class="flex items-center gap-3">
                    <span class="text-4xl animate-bounce">${intro.figuras}</span>
                    <div>
                        <h3 class="font-extrabold text-xl text-sky-900">${intro.titulo}</h3>
                        <p class="text-sm font-bold text-sky-800">${intro.texto}</p>
                    </div>
                </div>
                <button onclick="falarTexto('${q.pergunta}')" class="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-2xl text-2xl btn-bounce shadow-md">
                    🔊 Ouvir
                </button>
            </div>
        `;
    }

    document.getElementById('quiz-numero-questao').innerText = `Pergunta ${quizIndiceAtual + 1} de ${CONFIG_PROFESSOR.quiz.length}`;
    document.getElementById('quiz-pergunta-icone').innerText = q.iconePergunta || "❓";
    document.getElementById('quiz-pergunta-texto').innerText = q.pergunta;

    falarTexto(`Pergunta ${quizIndiceAtual + 1}: ${q.pergunta}`);

    const grid = document.getElementById('quiz-opcoes-grid');
    grid.innerHTML = '';

    q.opcoes.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "bg-slate-50 border-4 border-sky-200 hover:border-sky-400 rounded-3xl p-5 flex flex-col items-center btn-bounce shadow-md transition-all";
        btn.onclick = () => verificarRespostaQuiz(opt.texto);
        btn.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <span class="bg-sky-500 text-white font-extrabold px-3 py-1 rounded-full text-lg">${opt.letra}</span>
                <span class="text-5xl animate-pulse">${opt.icone}</span>
            </div>
            <span class="font-bold text-sky-950 text-lg text-center leading-snug">${opt.texto}</span>
        `;
        grid.appendChild(btn);
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.className = "mt-6 p-4 rounded-2xl text-center font-bold text-xl hidden";
}

function verificarRespostaQuiz(opcaoSelecionada) {
    const q = CONFIG_PROFESSOR.quiz[quizIndiceAtual];
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (opcaoSelecionada === q.respostaCorreta) {
        tocarSom('acerto');
        quizPontuacao++;

        feedback.className = "mt-6 p-4 rounded-3xl text-center font-extrabold text-2xl bg-emerald-100 text-emerald-900 border-4 border-emerald-400 animate-bounce";
        feedback.innerHTML = "✨ PARABÉNS! VOCÊ ACERTOU! 🎉";
        falarTexto("Parabéns! Resposta correta!");

        setTimeout(() => {
            if (quizIndiceAtual < CONFIG_PROFESSOR.quiz.length - 1) {
                quizIndiceAtual++;
                renderizarPerguntaQuiz();
            } else {
                finalizarProvaEGravarNota();
            }
        }, 1800);
    } else {
        tocarSom('erro');
        feedback.className = "mt-6 p-4 rounded-3xl text-center font-extrabold text-2xl bg-rose-100 text-rose-900 border-4 border-rose-400";
        feedback.innerHTML = "Ops! Tente outra vez! 💡 Clique no áudio para ouvir a dica!";
        falarTexto("Ops! Tente outra alternativa!");
    }
}

function finalizarProvaEGravarNota() {
    tocarSom('acerto');
    dispararConfeti();

    const notaFinal = ((quizPontuacao / CONFIG_PROFESSOR.quiz.length) * 10).toFixed(1);

    const registro = {
        nome: dadosAluno.nome || "Anônimo",
        numero: Number(dadosAluno.numero) || 0,
        turma: dadosAluno.turma || "Geral",
        acertos: quizPontuacao,
        nota: parseFloat(notaFinal)
    };

    fetch('https://jogoseducativos-production.up.railway.app/api/salvar-nota', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registro)
    })
    .then(response => response.json())
    .then(data => console.log('✅ Nota gravada no MySQL com sucesso:', data))
    .catch(error => console.error('❌ Erro ao enviar nota:', error));

    document.getElementById('res-aluno-nome').innerText = `Estudante: ${registro.nome} (Nº ${registro.numero})`;
    document.getElementById('res-aluno-turma').innerText = `Turma: ${registro.turma}`;
    document.getElementById('res-nota-final').innerText = `Nota Final: ${notaFinal}`;
    document.getElementById('res-acertos-detalhe').innerText = `Acertos: ${quizPontuacao} de 10 questões`;

    document.getElementById('modal-vitoria').classList.remove('hidden');
    falarTexto(`Muito bem, ${registro.nome}! Você concluiu o desafio do robô com nota ${notaFinal}!`);
}

function reiniciarQuiz() {
    quizIndiceAtual = 0;
    quizPontuacao = 0;
    document.getElementById('modal-vitoria').classList.add('hidden');
    renderizarPerguntaQuiz();
}

function trocarAba(aba) {
    tocarSom('click');
    const secMercadinho = document.getElementById('sec-mercadinho');
    const secQuiz = document.getElementById('sec-quiz');
    const btnMercadinho = document.getElementById('aba-mercadinho');
    const btnQuiz = document.getElementById('aba-quiz');

    if (aba === 'mercadinho') {
        secMercadinho.classList.remove('hidden');
        secQuiz.classList.add('hidden');
        btnMercadinho.className = "py-2.5 px-3 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-1.5 btn-bounce bg-emerald-500 text-white shadow-md";
        btnQuiz.className = "py-2.5 px-3 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-1.5 btn-bounce bg-white text-emerald-800 hover:bg-emerald-100";
        renderizarDesafiosVisuais();
    } else {
        secMercadinho.classList.add('hidden');
        secQuiz.classList.remove('hidden');
        btnQuiz.className = "py-2.5 px-3 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-1.5 btn-bounce bg-sky-500 text-white shadow-md";
        btnMercadinho.className = "py-2.5 px-3 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-1.5 btn-bounce bg-white text-emerald-800 hover:bg-emerald-100";
        renderizarPerguntaQuiz();
    }
}

function dispararConfeti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettis = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: ['#f59e0b', '#10b981', '#3b82f6', '#ec4899'][Math.floor(Math.random() * 4)],
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
    setTimeout(() => { cancelAnimationFrame(animId); ctx.clearRect(0,0,canvas.width,canvas.height); }, 3000);
}
