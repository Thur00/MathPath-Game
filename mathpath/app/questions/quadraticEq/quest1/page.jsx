//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para resolver a equação:",
      content: "\\(x^2 - 5x + 6 = 12\\)",
    },
    {
      id: 2,
      title: "Iguale a equação a 0, subtraindo 12 de ambos os lados:",
      content: "\\(x^2 - 5x + 6 - 12 = 0\\)",
    },
    {
      id: 3,
      content: "\\(x^2 - 5x - 6 = 0\\)",
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
      content: "\\(a=1 \\text{, } b=-5 \\text{ e } c=-6 \\)",
    },
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot (-6)}}{2 \\cdot 1}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{5 \\pm \\sqrt{25 - 24}}{2}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{5 \\pm \\sqrt{1}}{2}\\)",
    },
    {
      id: 9,
      content: "\\(x = \\frac{5 \\pm 1}{2}\\)",
    },
    {
      id: 10,
      title: "E então:",
      content: "\\(x_1 = \\frac{5 + 1}{2}\\)",
    },
    {
      id: 11,
      content: "\\(x_1 = \\frac{6}{2} = 3\\)",
    },
    {
      id: 12,
      content: "\\(x_2 = \\frac{5 - 1}{2}\\)",
    },
    {
      id: 13,
      content: "\\(x_2 = \\frac{2}{2} = 2  \\)",
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
