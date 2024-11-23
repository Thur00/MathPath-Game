//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x na equação:",
      content: "\\(5 (x+3) = 25 \\)",
    },
    {
      id: 2,
      title:
        "É necessário a seguinte manipulação",
      content: "\\(5x + 15 =  25\\)",
    },
    {
      id: 3,
      title: "Isolar o x:",
      content: "\\(5x = 15 - 25\\)",
    },
    { id: 4, content: "\\(5x = 10\\)" },
    { id: 5, content: "\\(x = \\frac{10}{5}\\)" },
    { id: 6, content: "\\(x=2\\)" },
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
