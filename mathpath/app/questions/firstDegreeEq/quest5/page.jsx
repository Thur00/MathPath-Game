//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de b em:",
      content: "\\(2x + b = 12\\)",
    },
    {
      id: 2,
      title:
        "Se x = 2, é necessário fazer a seguinte substituição:",
      content: "\\( 2 \\cdot 2 + b =  12\\)",
    },
    {
      id: 3,
      content: "\\(4 + b = 12\\)",
    },
    { id: 4, content: "\\(b = 12 - 4\\)" },
    { id: 5, content: "\\(x=8\\)" },
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
