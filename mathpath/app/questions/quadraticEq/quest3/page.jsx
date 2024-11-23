//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para resolver x em:",
      content: "\\(2x^2 + 3x = 2\\)",
    },
    {
      id: 2,
      title: "Iguale a equação a 0, subtraindo 2 de ambos os lados:",
      content: "\\(2x^2 + 3x - 2 = 0\\)",
    },
    {
      id: 3,
      title: "Agora, utilizando a fórmula de Bhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 4,
      title: "E considerando os valores:",
      content: "\\(a=2 \\text{, } b=3 \\text{ e } c=-2 \\)",
    },
    {
      id: 5,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-3 \\pm \\sqrt{3^2 - 4 \\cdot 2 \\cdot (-2)}}{2 \\cdot 2}\\)",
    },
    {
      id: 6,
      content: "\\(x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{-3 \\pm \\sqrt{25}}{4}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{-3 \\pm 5}{4}\\)",
    },
    {
      id: 9,
      title: "E então:",
      content: "\\(x_1 = \\frac{-3 + 5}{4}\\)",
    },
    {
      id: 10,
      content: "\\(x_1 = \\frac{2}{4} = 0,5\\)",
    },
    {
      id: 11,
      content: "\\(x_2 = \\frac{-3 - 5}{4}\\)",
    },
    {
      id: 12,
      content: "\\(x_2 = \\frac{-8}{4} = -2  \\)",
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
