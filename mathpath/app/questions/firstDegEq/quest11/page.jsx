//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o resultado da equação:",
      content: "\\( 2x - 6 \\)",
    },
    {
      id: 2,
      title: "Primeiramente substitua o valor de x por 8",
      content: "\\(2 \\cdot 8 - 6\\)",
    },
    {
      id: 3,
      content: "\\( 16 - 6 \\)",
    },
    { id: 4, content: "\\(y=10\\)" },
  ];

  let title;
  switch (tipo) {
    case "func":
      title = "Função:";
      break;
    case "eq":
      title = "Equação de 1° Grau:";
      break;
    case "quad":
      title = "Equação de 2° Grau:";
      break;
    default:
      title = "";
  }

  return (
    <main className={`main ${tipo}`}>
      <Header tipo={tipo} />
      <div className="div">
        <h1>{title}</h1>
        <Card tipo={tipo} contas={contas} />
      </div>
      <Footer tipo={tipo} />
    </main>
  );
}
