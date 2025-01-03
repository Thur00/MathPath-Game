//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para determminar x na equação:",
      content: "\\( 9x - 4 = 2(x+5) \\)",
    },
    {
      id: 2,
      title: "Faça a distributiva (o “chuveirinho”):",
      content: "\\(9x -  4 = 2x + 10\\)",
    },
    {
      id: 3,
      title: "Isole o x:",
      content: "\\( 9x - 2x = 10 + 4 \\)",
    },
    { id: 4, content: "\\( 7x = 14 \\)" },
    { id: 5, content: "\\(x= \\frac{14}{7}\\)" },
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
