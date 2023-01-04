import { TransacaoPagamento } from "./transacao-pagamento.interface";
import { TransacaoStatus } from "./transacao-status.interface";

export interface Transacao {
  nome: string;
  id: string;
  data: string;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: string;
  pagamento: TransacaoPagamento;
  novo: boolean;
}
