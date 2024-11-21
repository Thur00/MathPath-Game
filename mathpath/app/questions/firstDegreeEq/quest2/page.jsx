//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em",
      content: "\\(3x - 5 = 7 \\)",
    },
    {
      id: 2,
      title: "Podemos fazer a seguinte manipulação",
      content: "\\(3x = 7 + 5\\)",
    },
    {
      id: 3,
      content: "\\(3x = 12\\)",
    },
    {
      id: 4,
      title:
        "Como temos o resultado de 3x e queremos só 1 é necessário dividir o valor em 3",
      content: "\\(x = \\frac{12}{3}\\)",
    },
    { id: 5, content: "\\(x = 4\\)" },
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
