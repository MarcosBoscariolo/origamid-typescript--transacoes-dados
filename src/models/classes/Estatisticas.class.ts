import countBy from "../../shared/utils/count-by.js";
import { Transacao } from "../interfaces/transacao.interface";

type TransacaoValor = Transacao & { valor: number };
function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((cont, transacao) => {
      return cont + transacao.valor;
    }, 0);
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }

  private setSemana() {
    const semana = {
        ["Domingo"]: 0,
        ["Segunda"]: 0,
        ["Terça"]: 0,
        ["Quarta"]: 0,
        ["Quinta"]: 0,
        ["Sexta"]: 0,
        ["Sábado"]: 0
    };
    for (let i = 0; i < this.transacoes.length; i++) {
        const diaSemana = this.transacoes[i].data.getDay();
        switch (diaSemana) {
            case 0: semana["Domingo"] += 1;
                break;
            case 1: semana["Segunda"] += 1;
                break;
            case 2: semana["Terça"] += 1;
                break;
            case 3: semana["Quarta"] += 1;
                break;
            case 4: semana["Quinta"] += 1;
                break;
            case 5: semana["Sexta"] += 1;
                break;
            case 6: semana["Sábado"] += 1;
                break;
            default: console.log("No such day exists!");
                break;
        }
    }
    return semana;
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((prox, atual) => {
        return atual[1] - prox[1];
    })[0]; 
  }
}
