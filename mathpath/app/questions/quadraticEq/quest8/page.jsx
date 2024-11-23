//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para descobrir a raíz da equação:",
      content: "\\(x^2 + 4x + 4 = 0\\)",
    },
    {
      id: 4,
      title: "Utilizando a fórmula de Bhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 5,
      title: "E considerando os valores:",
      content: "\\(a=1 \\text{, } b=4 \\text{ e } c=4 \\)",
    },  
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-4 \\pm \\sqrt{4^2 - 4 \\cdot 1 \\cdot 4}}{2 \\cdot 1}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{-4 \\pm \\sqrt{16 - 16}}{2}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{-4 \\pm \\sqrt{0}}{2}\\)",
    },
    {
      id: 9,
      content: "\\(x = \\frac{-4 \\pm 0}{2}\\)",
    },
    {
      id: 11,
      content: "\\(x = \\frac{-4}{2} = -2\\)",
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
