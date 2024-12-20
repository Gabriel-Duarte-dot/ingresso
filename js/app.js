
function comprar() {
    let ingressoEscolhido = document.getElementById('tipo-ingresso');
    let quantidadeIngressos = parseInt(document.getElementById('qtd').value);

    
    if(ingressoEscolhido.value == 'pista'){
        comprarPista(quantidadeIngressos);

    } else if(ingressoEscolhido.value =='inferior'){
        comprarInferior(quantidadeIngressos);
    } else {
        comprarSuperior(quantidadeIngressos);
    }
    

}

function comprarPista(quantidadeIngressos) {
    let ingressosQtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidadeIngressos > ingressosQtdPista) {
        alert('Quantidade Indisponível');
    } else {
        ingressosQtdPista = ingressosQtdPista - quantidadeIngressos;
        document.getElementById('qtd-pista').textContent = ingressosQtdPista;
        alert('Compra Realizada com Sucesso!');
    }

}

function comprarInferior(quantidadeIngressos) {
    let ingressosQtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidadeIngressos > ingressosQtdInferior) {
        alert('Quantidade Indisponível');
    } else {
        ingressosQtdInferior = ingressosQtdInferior - quantidadeIngressos;
        document.getElementById('qtd-inferior').textContent = ingressosQtdInferior;
        alert('Compra Realizada com Sucesso!');
        }
    
    }

function comprarSuperior(quantidadeIngressos) {
        let ingressosQtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(quantidadeIngressos > ingressosQtdSuperior) {
            alert('Quantidade Indisponível');
        } else {
            ingressosQtdSuperior = ingressosQtdSuperior - quantidadeIngressos;
            document.getElementById('qtd-superior').textContent = ingressosQtdSuperior;
            alert('Compra Realizada com Sucesso!');
        }
    }