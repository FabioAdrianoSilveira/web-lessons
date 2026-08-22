function calcularDesconto() {
  let valor = document.getElementsByName("nmrValor")[0].value;
  let quantidade = document.getElementsByName("sltQuantidade")[0].value;
  let desconto = document.getElementsByName("sltDesconto")[0].value;

  let valorDesconto = valor * quantidade * (desconto / 100);

  alert("Valor de desconto de R$" + valorDesconto.toFixed(2));
}
