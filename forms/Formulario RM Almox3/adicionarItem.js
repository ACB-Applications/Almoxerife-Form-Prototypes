$(function () {
  adicionarItem();
});

function adicionarItem() {
  $("[name=botaoAdicionarItem]").click(function () {
    var index = wdkAddChild("tableNameAddRequisicao");
  });
}

function deleteRequisicao(oElement, nameTable, classFieldSet) {
  var contador = $("[name^=" + oElement.id.split("___")[0] + "]").length;
  fnWdkRemoveChild(oElement);
}
