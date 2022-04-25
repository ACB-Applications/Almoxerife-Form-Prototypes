$("[id=pesquisa-aprofundada]").click(function modalPesquisaAprofundada() {
  var myModal = FLUIGC.modal(
    {
      title: "Item",
      content: "",
      id: "fluig-modal",
      size: "large",
    },
    function (err, data) {
      if (err) {
        // do error handling
      } else {
        // do something with data
      }
    }
  );
});
