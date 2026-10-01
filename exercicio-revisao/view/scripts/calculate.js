function calcTotal() {
    let valor = document.getElementsByName("iValor")[0].value;
    let desconto = document.getElementsByName("selDesconto")[0].value;
    
    let valorDesconto = valor * ((desconto / 100))

    alert("Desconto de R$ " + valorDesconto.toFixed(2));
}