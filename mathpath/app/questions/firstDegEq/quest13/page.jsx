//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title:
        "Para encontrar o valor de x que faça a igualdade ser verdadeira em:",
      content: "\\( 8x - 5 \\)",
    },
    {
      id: 2,
      title: "Primeiramente deve-se igualar a 3x + 27",
      content: "\\(8x  - 5 = 3x + 27\\)",
    },
    {
      id: 3,
      title: "E resolver:",
      content: "\\( 8x - 3x = 27 + 5 \\)",
    },
    { id: 4, content: "\\( 5x = 32 \\)" },
    { id: 5, content: "\\(x= \\frac{32}{5}\\)" },
    { id: 6, content: "\\(x=6,4\\)" },
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
