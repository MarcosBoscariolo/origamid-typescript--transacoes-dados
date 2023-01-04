import Estatisticas from "../../models/classes/Estatisticas.class.js";
import { CountList } from "../../models/interfaces/count-list.interface.js";
import { Transacao } from "../../models/interfaces/transacao.interface";

function preencherLista(lista: CountList, elementId: string): void {
  const containerElement = document.getElementById(elementId);
  if (containerElement) {
    Object.keys(lista).forEach(key => {
      containerElement.innerHTML += `
        <p>${key}: ${lista[key]}</p>
      `
    });
  }
}

export default function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  const diaElement = document.querySelector<HTMLElement>("#dia span");
  
  (data.pagamento, "pagamento");
  preencherLista(data.status, "status");
  
  if (totalElement) {
    totalElement.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  if (diaElement) {
    diaElement.innerText = data.melhorDia[0];
  }

}
