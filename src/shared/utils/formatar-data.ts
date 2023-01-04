export default function formatarData(str: string): Date {
    const [data, tempo] = str.split(" ");
    const [ano, mes, dia] = data.split("/").map(Number);
    const [hora, minuto] = tempo.split(":").map(Number);
    return new Date(ano, mes - 1, dia, hora, minuto);
}