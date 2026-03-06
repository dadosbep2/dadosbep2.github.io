function calcularRV() {
    let prod = parseFloat(document.getElementById("prod").value) || 0;
	let desempenho = parseFloat(document.getElementById("desempenho").value) || 0;
    let faixa10 = parseInt(document.getElementById("10k").value) || 0;
    let faixa15 = parseInt(document.getElementById("15k").value) || 0;
    let faixa20 = parseInt(document.getElementById("20k").value) || 0;
    let faixa25 = parseInt(document.getElementById("25k").value) || 0;
    let prodb = document.getElementById("prodBonus").value.trim().toUpperCase();
    let tpvmediop = parseFloat(document.getElementById("tpvmediop").value) || 0;
    let prodbi = parseFloat(document.getElementById("prodbi").value) || 0;
    let tpvmediobi = parseFloat(document.getElementById("tpvmediobi").value) || 0;
    let migracaobi = parseFloat(document.getElementById("migracaobi").value) || 0;

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
	let ds = 0;
	if (desempenho < 85) {
		ds = 0;
	} else if (desempenho >= 85 & desempenho < 90) {
		ds = 0.05;
	} else if (desempenho >= 90 & desempenho < 100) {
		ds = 0.075;
	} else if (desempenho >= 100 & desempenho < 120) {
		ds = 0.1;
	} else if (desempenho >= 120 & desempenho < 150) {
		ds = 0.2;
	} else if (desempenho >= 150) {
		ds = 0.5;
	}
	valorBase *= (1+ds);
	
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
    if (prodbi >= 0.4) {
		valorTrimestral += 740;
    }
    if (tpvmediobi >= 15000) {
		valorTrimestral += 1480;
    }
	if (migracaobi < 30) {
		valorTrimestral += 0;
	} else if (migracaobi >= 30 & migracaobi < 40) {
		valorTrimestral += 370;
	} else if (migracaobi >= 40 & migracaobi < 50) {
		valorTrimestral += 555;
	} else if (migracaobi >= 50 & migracaobi < 60) {
		valorTrimestral += 925;
	} else {
		valorTrimestral += 1480;
	}	
    
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



