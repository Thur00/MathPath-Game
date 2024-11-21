//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para resolver a equação:",
      content: "\\(2x + 3 = 11\\)",
    },
    {
      id: 2,
      title: "Podemos fazer as seguintes manipulações:",
      content: "\\(2x = 11 - 3\\)",
    },
    {
      id: 3,
      content: "\\(2x = 8\\)",
    },
    {
      id: 4,
      title:
        "Como temos o resultado de 2x e queremos só 1, é necessário dividir o valor em dois.",
      content: "\\(x = \\frac{8}{2}\\)",
    },
    {
      id: 5,
      content: "\\(x=4\\)",
    },
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
