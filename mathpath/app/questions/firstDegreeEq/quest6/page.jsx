//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para obter x na equação:",
      content: "\\(-2(x - 4 ) = 8 \\)",
    },
    {
      id: 2,
      title:
        "Primeiramente é necessário fazer o “chuveirinho”, que é a multiplicação dos números dentro do parentes",
      content: "\\(-2x + 8 = 8\\)",
    },
    {
      id: 3,
      title: "E então",
      content: "\\(-2x = 8 - 8\\)",
    },
    { id: 4, content: "\\(-2x = 0\\)" },
    { id: 5, content: "\\(x= \\frac{0}{-2}\\)" },
    { id: 6, content: "\\(x=0\\)" },
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
