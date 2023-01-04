export type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
export type TransacaoStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";
