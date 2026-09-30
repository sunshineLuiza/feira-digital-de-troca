//seletores devem levar aspas
const formulario = document.querySelector('#formItem');
const nomeProduto = document.querySelector('#nome');
const nomeResponsavel = document.querySelector('#responsavel');
const descricaoItem = document.querySelector('#descricao');
const btnAdicionar = document.querySelector('#btn-adicionar');
const btnLimpar = document.querySelector('#btn-limpar');
const pesquisarItem = document.querySelector('#pesquisa');
const categoriaItem = document.querySelector('#categoria');
const estadoItem = document.querySelector('#estado');
const disponibilidade = document.querySelector('#tipo');

const itensTotais = document.querySelector('#totalItens');
const itensDisponiveis = document.querySelector('#totalDisponiveis');
const itensReservados = document.querySelector('#totalReservados');
const doacoes = document.querySelector('#totalDoacoes');
const categoriaFiltro = document.querySelector('#filtroCategoria');
const tipoFiltro = document.querySelector('#filtroTipo');
const situacaoFiltro = document.querySelector('#filtroSituacao');
const resumoQuantidade = document.querySelector('#quantidadeResultados');
const resumoItens = document.querySelector('#listaItens');
const resumoVazio = document.querySelector('#estadoVazio');


let listaItens = []; //o meu const estava errado, ele não poderia atualizar...

function salvarItens() {
    localStorage.setItem('meus_itens', JSON.stringify(listaItens));
}

function carregarItens() {
    const listaEmTexto = localStorage.getItem('meus_itens');
    if (listaEmTexto === null) {
        listaItens = [];
        return;
    }
    listaItens = JSON.parse(listaEmTexto);
}

function renderizarItens() {
    console.log("Itens atuais:", listaItens);
    }

function adicionarItem() {
    if (nomeProduto.value.trim() === '') {
        alert('Este campo (nome) deve ser preenchido.');
        return;
    }
    if (nomeResponsavel.value.trim() === '') {
        alert('Este campo (responsável) deve ser preenchido.');
        return;
    }
    if (descricaoItem.value.trim() === '') {
        alert('Este campo (descrição) deve ser preenchido.');
        return;
    }
    if (categoriaItem.value === '') {
        alert('Selecione uma categoria.');
        return;
    }
    if (estadoItem.value === '') {
        alert('Selecione o estado.');
        return;
    }
    if (disponibilidade.value === '') {
        alert('Selecione o tipo/disponibilidade.');
        return;
    }

    const novoItem = {
        id: Date.now(),
        Produto: nomeProduto.value,
        Categoria: categoriaItem.value,
        Estado: estadoItem.value,
        Disponibilidade: disponibilidade.value,
        Responsavel: nomeResponsavel.value,
        Descricao: descricaoItem.value,
    };

    listaItens.push(novoItem);
    salvarItens();
    renderizarItens();
    
    formulario.reset(); // para limpar o formulário após adicionar, não esquecer
}



btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); 
    adicionarItem();
});


btnLimpar.addEventListener('click', function () {
    formulario.reset();
});

carregarItens();
renderizarItens();
