import fetchData from "./shared/service/fetch-data.js";
import { TransacaoAPI } from "./models/interfaces/transacao-api.interface.js";
import normalizarTransacao from "./shared/utils/normalizar-transacao.js";
import preencherTabela from "./shared/component/preencher-tabela.js";
import preencherEstatisticas from "./shared/component/preencher-estatisticas.js";

handleData();

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}
