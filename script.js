function calcularRV() {
    let prod = parseFloat(document.getElementById("prod").value) || 0;
    let faixa10 = parseInt(document.getElementById("10k").value) || 0;
    let faixa15 = parseInt(document.getElementById("15k").value) || 0;
    let faixa20 = parseInt(document.getElementById("20k").value) || 0;
    let faixa25 = parseInt(document.getElementById("25k").value) || 0;
    let prodb = document.getElementById("prodBonus").value.trim().toUpperCase();
    let tpvmediop = parseFloat(document.getElementById("tpvmediop").value) || 0;
    let tpvmediotri = parseFloat(document.getElementById("tpv-medio").value) || 0;
    let vendas = parseInt(document.getElementById("qtdvendas").value) || 0;
    let meta = parseFloat(document.getElementById("metaconjunta").value) || 0;

    let valorComissao = 0;

    // Definição do valor comissão 
    if (prod < 0.35) {
        valorComissao = 0;
    } else if (prod >= 0.35 && prod < 0.5) {
        valorComissao = 750;
    } else 
	valorComissao = 1000;


    // Definição do valor base para premiação
    let valorBase = faixa10*12 + faixa15*20 + faixa20*37.5 + faixa25*55;

    // Definição do valor da premiação bônus
    let valorBonus = 0;
    if (prodb == "S" && tpvmediop >= 15000) {
	valorBonus = 500;
    } else if (prodb == "S" && tpvmediop >= 10000) {
	valorBonus = 200;
    } else {
	valorBonus = 0;
    } 

    // Definição valor trimestral
    let valorTrimestral = 0;
    if (tpvmediotri >= 15000) {
	valorTrimestral += 1650;
    }
    if (vendas >= 240) {
	valorTrimestral += 1650;
    }
    valorTrimestral += (meta/100)*5500;	
    
    // Salário fixo e ajuda de custo
    const salarioFixo = 2783.12;
    const ajudaCusto = 1200.00;
	
    // Soma final
    let totalRV = salarioFixo + ajudaCusto + valorComissao + valorBase + valorBonus + valorTrimestral;

    // Exibição dos resultados separados
    document.getElementById("resultado").innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> <span>R$ ${salarioFixo.toFixed(2)}</span></p>
        <p><strong>Ajuda de Custo:</strong> <span>R$ ${ajudaCusto.toFixed(2)}</span></p>
        <p><strong>Valor Comissão:</strong> <span>R$ ${valorComissao.toFixed(2)}</span></p>
        <p><strong>Valor Premiação:</strong> <span>R$ ${valorBase.toFixed(2)}</span></p>
        <p><strong>Valor Bônus:</strong> <span>R$ ${valorBonus.toFixed(2)}</span></p>
        <p><strong>Valor Trimestral:</strong> <span>R$ ${valorTrimestral.toFixed(2)}</span></p>
        <p><strong>Total Final:</strong> <span>R$ ${totalRV.toFixed(2)}</span></p>
    `;
}

function selecionarBonus(botao) {
    // Remove a seleção anterior
    document.querySelectorAll(".bonus-btn").forEach(btn => btn.classList.remove("active"));

    // Marca o botão clicado
    botao.classList.add("active");

    // Atualiza o input hidden para o cálculo
    document.getElementById("prodBonus").value = botao.dataset.value;
}


