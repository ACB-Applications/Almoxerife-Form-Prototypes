$("[name=usernameDataSUL]").on("keypress", function (event) {
  var regex = new RegExp("^[a-zA-Z0-9_]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

$(
  "[name=codigoItem],[name=codigoUtilizacao],[name=ordemInvestimento],[name=conta],[name=centroCusto]"
).on("keypress", function (event) {
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
