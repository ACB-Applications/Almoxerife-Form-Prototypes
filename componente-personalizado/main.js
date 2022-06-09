import { templateTableTr } from "./components/TemplateTableTr.js";

const items = [
  { seq: 1, item: 5746011, descricao: "PARAFUSO", um: 'PC', qtde: 12, dep: "M1", valorTotal: 1232.32, localizacao: "A2-07-1098", saldo: 126, qtdeAtendida: 22 },
  { seq: 2, item: 5746022, descricao: "PREGO", um: 'PC', qtde: 12, dep: "M1", valorTotal: 1232.32, localizacao: "A2-07-1098", saldo: 16, qtdeAtendida: 312 },
  { seq: 3, item: 5746033, descricao: "ALICATE", um: 'PC', qtde: 12, dep: "M1", valorTotal: 1422.32, localizacao: "A2-07-1098", saldo: 1246, qtdeAtendida: 132 },
  { seq: 4, item: 5746044, descricao: "MARTELO", um: 'PC', qtde: 12, dep: "M1", valorTotal: 1222.32, localizacao: "A2-07-1098", saldo: 1226, qtdeAtendida: 12 },
]

const renderTableTr = document.querySelector("tbody");

renderTableTr.innerHTML = items.map(item => {
  if (item.valorTotal) item.valorTotal = "R$ " + item.valorTotal.toFixed(2);
  return templateTableTr(item)
}).join('');