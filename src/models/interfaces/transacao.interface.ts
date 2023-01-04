import { TransacaoPagamento, TransacaoStatus } from "../types/transacao-types";

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
