//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para encontrar b na equação:",
      content: "\\(x^2 - bx + 10 = 0\\)",
    },
    {
      id: 2,
      title: "Se a raiz da equação é o x, e x = 2, então:",
      content: "\\(2^2 - b \\cdot 2 + 10= 0\\)",
    },
    {
      id: 3,
      content: "\\(4 - 2b + 10= 0\\)",
    },
    {
      id: 4,
      content: "\\(14 - 2b = 0\\)",
    },
    {
      id: 5,
      title: "isole b e resolva:",
      content: "\\(-2b = -14\\)",
    },
    {
      id: 6,
      content: "\\(b = \\frac{-14}{-2}\\)",
    },
    {
      id: 7,
      content: "\\(b=7\\) ",
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
