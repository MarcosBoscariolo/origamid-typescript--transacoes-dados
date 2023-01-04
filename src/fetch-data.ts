export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`[ERROR]: Erro na chamada da API -> ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) console.error(`[response ERROR]: fetchData ->`, error.message);
    return null;
  }
}
