function abrir() {
    document.getElementById('wrap-open').style.display = "none";
    document.getElementById('menu-mobile').style.display = "flex";
}

function fechar() {
    document.getElementById('wrap-open').style.display = "flex";
    document.getElementById('menu-mobile').style.display = "none";
}

function irParaContato() {
    window.location.href = "#contato";
}

function praBaixo() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

const dadosDesperdicios = {
    geral: {
        titulo: "Problemas na Logística (Visão Geral)",
        descricao: "Os principais problemas que encontramos nas operações sem planejamento:",
        itens: [
            "Atrasos nas entregas",
            "Mercadorias danificadas",
            "Gastos excessivos com combustível",
            "Falta de organização",
            "Desperdício de materiais"
        ]
    },
    estoques: {
        titulo: "Desperdícios nos Estoques",
        descricao: "O excesso de produtos armazenados ou a falta de controle pode causar:",
        itens: [
            "Produtos vencidos",
            "Mercadorias estragadas",
            "Falta de espaço físico",
            "Dinheiro parado em estoque"
        ]
    },
    transporte: {
        titulo: "Desperdícios no Transporte",
        descricao: "Falhas na gestão da frota e das rotas geram altos custos:",
        itens: [
            "Caminhões circulando vazios",
            "Rotas muito longas",
            "Consumo excessivo de combustível",
            "Má conservação dos veículos"
        ]
    },
    distribuicao: {
        titulo: "Desperdícios na Distribuição",
        descricao: "Na etapa final até o cliente podem acontecer:",
        itens: [
            "Entregas no endereço errado",
            "Atrasos nas entregas",
            "Produtos perdidos",
            "Embalagens danificadas",
            "Reentregas desnecessárias"
        ]
    }
};

function mudarAba(categoria, botaoClicado) {
    const botoes = document.querySelectorAll('.aba-btn');
    botoes.forEach(btn => btn.classList.remove('ativa'));
    if (botaoClicado) {
        botaoClicado.classList.add('ativa');
    }

    const info = dadosDesperdicios[categoria];
    const painel = document.getElementById('conteudo-aba');
    const listaHTML = info.itens.map(item => `<li>⚠ ${item}</li>`).join('');

    painel.innerHTML = `
        <h3>${info.titulo}</h3>
        <p>${info.descricao}</p>
        <ul class="lista-problemas">${listaHTML}</ul>
    `;
}

let contador = 0;
const mensagensEcoTrack = [
    "Status: 42 veículos em rota otimizada • Economia de 18% em combustível.",
    "Status: Alerta preventivo — Lote #204 próximo do vencimento priorizado na expedição.",
    "Status: 99,4% das entregas concluídas no prazo sem reentregas."
];

function simularEcoTrack() {
    const box = document.getElementById('status-ecotrack');
    box.textContent = mensagensEcoTrack[contador % mensagensEcoTrack.length];
    contador++;
}

function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const retorno = document.getElementById('msg-retorno');
    retorno.textContent = `Obrigado, ${nome}! A Equipe 5 da EcoLog recebeu sua solicitação.`;
    event.target.reset();
}

mudarAba('geral', document.querySelector('.aba-btn'));