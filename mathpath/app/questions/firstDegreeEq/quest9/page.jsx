//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para determinar o valor de x na seguinte expressão:",
      content: "\\( 7x + 1 = 2(x+3) \\)",
    },
    {
      id: 2,
      title:
        "É necessário fazer o “chuveirinho”, (multiplicação dos números dentro do parênteses):",
      content: "\\(7x + 1 = 2x + 6\\)",
    },
    {
      id: 3,
      title: "Isole o x:",
      content: "\\(7x - 2x = 6 - 1 \\)",
    },
    { id: 4, content: "\\( 5x = 5 \\)" },
    {
      id: 5,
      title: "Divida ambos os lados por 5:",
      content: "\\(x= \\frac{5}{5}\\)",
    },
    { id: 6, content: "\\(x=1\\)" },
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
