$(function () {
  inserirDataAtual();
});

function inserirDataAtual() {
  var dataAgora = dataAtual();
  $("[id=dataRequisicao]").val(dataAgora);
}

// Cria a formatação da data atual
function dataAtual() {
  var novaData = new Date();
  var dia = novaData.getDate();
  var mes = novaData.getMonth() + 1;
  var ano = novaData.getFullYear();

  if (dia.toString().length == 1) {
    dia = "0" + dia;
  }

  if (mes.toString().length == 1) {
    mes = "0" + mes;
  }

  var dataAtual = dia + "/" + mes + "/" + ano;

  return dataAtual;
}
