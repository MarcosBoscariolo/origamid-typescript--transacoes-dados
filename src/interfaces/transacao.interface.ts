import { TransacaoPagamento } from "./transacao-pagamento.interface";
import { TransacaoStatus } from "./transacao-status.interface";

export interface Transacao {
  nome: string;
  id: string;
  data: Date;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}
