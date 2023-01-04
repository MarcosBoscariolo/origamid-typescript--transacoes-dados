import fetchData from "./shared/service/fetch-data.js";
import { TransacaoAPI } from "./interfaces/transacao-api.interface.js";
import normalizarTransacao from "./shared/utils/normalizar-transacao.js";
import preencherTabela from "./shared/component/preencher-tabela.js";

handleData();

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
}
