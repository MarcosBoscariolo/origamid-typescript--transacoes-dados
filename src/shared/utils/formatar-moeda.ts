/**
 * 
 * @param "1.200,00"
 * @returns 1200.00
 */
export default function formatarMoeda(moeda: string): number | null {
    const moedaFormatada = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(moedaFormatada) ? null : moedaFormatada;
}