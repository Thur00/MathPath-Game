//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar um valor de x que valide a equação:",
      content: "\\( 14x - 6 = 8x + 6 \\)",
    },
    {
      id: 2,
      title: "Isole o x:",
      content: "\\(14x - 8x = 6 + 6\\)",
    },
    {
      id: 3,
      content: "\\( 6x = 12 \\)",
    },
    { id: 4, content: "\\(x= \\frac{12}{6}\\)" },
    { id: 5, content: "\\(x=2\\)" },
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
