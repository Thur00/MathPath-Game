// getFontPath.js
export default function getFontPath() {
  // Se estiver em produção, use a URL base de produção
  if (process.env.NODE_ENV === "production") {
    return `${window.location.origin}/fonts`;
  }

  // Se estiver em ambiente de desenvolvimento ou local, use o caminho relativo
  return "/fonts";
}
