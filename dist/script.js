import fetchData from "./fetch-data.js";
handleData();
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        data.forEach((transacao) => {
            console.log(transacao);
        });
    }
}
