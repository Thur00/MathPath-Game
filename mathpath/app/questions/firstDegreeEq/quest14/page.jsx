//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em:",
      content: "\\( 3 (x-4) = 2(x+6) \\)",
    },
    {
      id: 2,
      title: "Faça a distributiva para encontrar os valores",
      content: "\\(3x  - 12 = 2x + 12\\)",
    },
    {
      id: 3,
      content: "\\( 3x - 2x = 12 + 12 \\)",
    },
    { id: 4, content: "\\(x=24\\)" },
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
