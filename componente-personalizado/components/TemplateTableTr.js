const templateTableTr = (item) => {
  return `
  <tr class="tr-tbody">
    <td>${item.seq}</td>
    <td>${item.item}</td>
    <td>
      <div class="container-desc">
        <div class="content-desc">
          ${item.descricao}
        </div>
      </div>
    </td>
    <td>${item.um}</td>
    <td>${item.qtde}</td>
    <td>${item.valorTotal}</td>
    <td>${item.dep}</td>
    <td>${item.localizacao}</td>
    <td>${item.saldo}</td>
    <td>${item.qtdeAtendida}</td>
  </tr>
  `;
};

export { templateTableTr };
