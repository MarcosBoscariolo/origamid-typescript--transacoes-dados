import { Transacao } from "../../interfaces/transacao.interface";

export default function preencherTabela(transacoes: Transacao[]) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela) return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
            <tr>
                <td>${transacao.nome}</td>
                <td>${transacao.email}</td>
                <td>R$ ${transacao.moeda}</td>
                <td>${transacao.pagamento}</td>
                <td>${transacao.status}</td>
            </tr>
        `
    })
}