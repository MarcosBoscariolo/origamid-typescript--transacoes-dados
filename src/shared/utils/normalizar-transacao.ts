import { TransacaoAPI } from "../../interfaces/transacao-api.interface";
import formatarData from "./formatar-data.js";
import formatarMoeda from "./formatar-moeda.js";

export default function normalizarTransacao(transacao: TransacaoAPI) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: formatarData(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: formatarMoeda(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}