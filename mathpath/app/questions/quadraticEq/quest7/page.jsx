//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para encontrar as raízes da equação:",
      content: "\\(4x^2 - 4x -8 = -8 \\)",
    },
    {
      id: 2,
      title: "Primeiro iguale a expressão a 0, subtraindo 8 de ambos os lados::",
      content: "\\(4x^2 - 4x -8 + 8 = 0\\)",
    },
    {
      id: 3,
      title: "Agora, utilizando a fórmula deBhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 5,
      title: "E considerando os valores:",
      content: "\\(a=4 \\text{, } b=-4 \\text{ e } c=0 \\)",
    },
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4 \\cdot 4 \\cdot 0}}{2 \\cdot 4}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{4 \\pm \\sqrt{16 - 0}}{8}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{4 \\pm \\sqrt{16}}{8}\\)",
    },
    {
      id: 9,
      content: "\\(x = \\frac{4 \\pm 4}{8}\\)",
    },
    {
      id: 10,
      title: "E então:",
      content: "\\(x_1 = \\frac{4 + 4}{8}\\)",
    },
    {
      id: 11,
      content: "\\(x_1 = \\frac{8}{8} = 1\\)",
    },
    {
      id: 12,
      content: "\\(x_2 = \\frac{4 - 4}{8}\\)",
    },
    {
      id: 13,
      content: "\\(x_2 = \\frac{0}{8} = 0\\)",
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
