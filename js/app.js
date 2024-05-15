//function chamada no botão
function comprar() {
    //Coletando dados
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    //Adquirindo tipo de ingresso
    if (tipoDeIngresso == 'inferior') {
        atualizarIngressosDisponiveis('inferior', quantidade);
    } else if (tipoDeIngresso == 'superior') {
        atualizarIngressosDisponiveis('superior', quantidade);
    } else if (tipoDeIngresso == 'pista') {
        atualizarIngressosDisponiveis('pista', quantidade);
    }
}
//function para reduzir o código
function atualizarIngressosDisponiveis(tipoIngresso, quantidade) {
    let ingressosDisponiveis = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    if (ingressosDisponiveis >= quantidade) {
        let ingressosRestantes = ingressosDisponiveis - quantidade;
        document.getElementById(`qtd-${tipoIngresso}`).innerHTML = `${ingressosRestantes}`;
    } else {
        alert(`Não há ${quantidade} ingressos disponíveis para o setor de ${tipoIngresso}.`);
    }
}