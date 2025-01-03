//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em",
      content: "\\(f(x) = 2x + 3 = 11\\)",
    },
    {
      id: 2,
      title: "Devemos tirar três dos dois lados:",
      content: "\\(2x = 11 - 3\\)",
    },
    {
      id: 3,
      title: "E então isolar o x:",
      content: "\\(x = \\frac{8}{2}\\)",
    },
    { id: 4, title: "Calculando:", content: "\\(x = 4\\)" },
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
    case "funce":
      title = "Função:";
      break;
    case "eqe":
      title = "Equação de 1° Grau:";
      break;
    case "quade":
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
