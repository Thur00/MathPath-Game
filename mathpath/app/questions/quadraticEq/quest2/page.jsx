//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em",
      content: "\\(ax^2 - 4x - 7 = 9\\) ",
    },
    {
      id: 2,
      title: "Comece substituindo a por 2 e iguale a 0:",
      content: "\\(2x^2 - 4x - 7 = 9\\)",
    },
    {
      id: 3,
      content: "\\(2x^2 - 4x - 7 - 9 = 0\\)",
    },
    {
      id: 3,
      content: "\\(2x^2 - 4x - 16 = 0\\)",
    },
    {
      id: 4,
      title: "Utilizando Bhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 5,
      title: "E considerando os valores:",
      content: "\\(a=2 \\text{, } b=-4 \\text{ e } c=-16 \\)",
    },
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4 \\cdot 2   \\cdot (-16)}}{2 \\cdot 2}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{4 \\pm \\sqrt{16 + 128}}{4}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{4 \\pm \\sqrt{144}}{4}\\)",
    },    
    {
      id: 9,
      content: "\\(x = \\frac{4 \\pm 12}{4}\\)",
    },
    {
      id: 10,
      title: "E então:",
      content: "\\(x_1 = \\frac{4 + 12}{4}\\)",
    },
    {
      id: 11,
      content: "\\(x_1 = \\frac{16}{4} = 4\\)",
    },
    {
      id: 12,
      content: "\\(x_2 = \\frac{4 - 12}{4}\\)",
    },
    {
      id: 13,
      content: "\\(x_2 = \\frac{-8}{4} = -2\\)",
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
