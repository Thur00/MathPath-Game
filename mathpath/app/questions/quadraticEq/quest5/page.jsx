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
      content: "\\(2x^2 - 2x - 8 = -4\\)",
    },
    {
      id: 2,
      title: "Adicione 4 em ambos os lados para igualar a equação a 0:",
      content: "\\(2x^2 - 2x - 8 + 4= 0\\)",
    },
    {
      id: 3,
      content: "\\(2x^2 - 2x - 4 = 0\\)",
    },
    {
      id: 4,
      title: "Agora, utilizando a fórmula deBhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 5,
      title: "E considerando os valores:",
      content: "\\(a=2 \\text{, } b=-2 \\text{ e } c=-4 \\)",
    },
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4 \\cdot 2 \\cdot (-4)}}{2 \\cdot 2}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{2 \\pm \\sqrt{4 + 32}}{4}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{2 \\pm \\sqrt{36}}{4}\\)",
    },
    {
      id: 9,
      content: "\\(x = \\frac{2 \\pm 6}{4}\\)",
    },
    {
      id: 10,
      title: "E então:",
      content: "\\(x_1 = \\frac{2 + 6}{4}\\)",
    },
    {
      id: 11,
      content: "\\(x_1 = \\frac{8}{4} = 2\\)",
    },
    {
      id: 12,
      content: "\\(x_2 = \\frac{2 - 6}{4}\\)",
    },
    {
      id: 13,
      content: "\\(x_2 = \\frac{-4}{4} = -1  \\)",
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
