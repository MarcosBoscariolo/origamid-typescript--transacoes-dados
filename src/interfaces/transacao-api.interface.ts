import { TransacaoPagamento } from "./transacao-pagamento.interface";
import { TransacaoStatus } from "./transacao-status.interface";

export interface TransacaoAPI {
  Nome: string;
  ID: string;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}
