export function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

export function nome(valor) {
  const nomeInformado = String(valor ?? "").trim();
  return nomeInformado || "Estudante";
}