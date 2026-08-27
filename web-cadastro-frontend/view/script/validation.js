function validateDados() {
  let nome = document.getElementsByName("txtNome")[0].value;
  let idade = document.getElementsByName("iIdade")[0].value;
  let telefone = document.getElementsByName("txtTelefone")[0].value;

  if (nome.length >= 40) {
    alert("O nome deve ser menor do que 40 caracteres!");
  }

  if (idade <= 25) {
    alert("Apenas maiores de 25 podem ser cadastrados");
  }

  if (isNaN(telefone)) {
    alert("Cadastre um número válido!");
  }
}
