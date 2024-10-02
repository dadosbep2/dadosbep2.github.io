document.getElementById('calculate-button').addEventListener('click', function () {
    // Captura dos valores de produção
    let prod = parseFloat(document.getElementById('prod').value) || 0;

    // Captura dos valores de TPV
    let campo1 = parseFloat(document.getElementById('campo1').value) || 0;
    let campo2 = parseFloat(document.getElementById('campo2').value) || 0;
    let campo3 = parseFloat(document.getElementById('campo3').value) || 0;
    let campo4 = parseFloat(document.getElementById('campo4').value) || 0;
    let campo5 = parseFloat(document.getElementById('campo5').value) || 0;
    let campo6 = parseFloat(document.getElementById('campo6').value) || 0;

    // Lógica de cálculo para a produção (prod)
    let prodValor = 0;
    if (prod >= 0.4 && prod < 0.5) {
        prodValor = 300;
    } else if (prod >= 0.5 && prod < 0.6) {
        prodValor = 450;
    } else if (prod >= 0.6) {
        prodValor = 900;
    }

    // Cálculo do valor de TPV
    let valorTPV = (campo1 * 0) + (campo2 * 5) + (campo3 * 15) + (campo4 * 25) + (campo5 * 30) + (campo6 * 50);

    // Salário fixo e ajuda de custo
    let salarioFixo = 2783.12;
    let ajudaCusto = 1200.00;

    // Cálculo do valor total
    let valorTotal = salarioFixo + ajudaCusto + prodValor + valorTPV;

    // Exibição do resultado
    document.getElementById('result').innerHTML = `
        <h3>Resultado:</h3>
        <p><strong>Salário Fixo:</strong> R$ ${salarioFixo.toFixed(2)}</p>
        <p><strong>Ajuda de Custo:</strong> R$ ${ajudaCusto.toFixed(2)}</p>
        <p><strong>Valor de Produção:</strong> R$ ${prodValor.toFixed(2)}</p>
        <p><strong>Valor de TPV:</strong> R$ ${valorTPV.toFixed(2)}</p>
        <p><strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}</p>
    `;
});
