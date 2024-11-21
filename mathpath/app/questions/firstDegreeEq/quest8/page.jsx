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
      content: "\\( 3x - 2 \\)",
    },
    {
      id: 2,
      title: "É necessário que haja a substituição de x",
      content: "\\(3 \\cdot 9 - 2 \\)",
    },
    {
      id: 3,
      content: "\\( 27 - 2 \\)",
    },
    { id: 4, content: "\\(y=25\\)" },
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
