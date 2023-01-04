import fetchData from "./fetch-data.js";
import { Transacao } from "./transacao.interface.js";

handleData();

async function handleData() {
    const data = await fetchData<Transacao[]>("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        data.forEach((transacao) => {
            console.log(transacao);
        });
    }
}

