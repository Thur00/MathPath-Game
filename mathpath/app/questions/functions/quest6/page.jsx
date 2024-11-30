//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x na função:",
      content: "\\(f(x)=x^2-3x+2\\)",
    },
    {
      id: 2,
      title: "Iguale a equação a 6, reorganize a equação",
      content: "\\(f(x)=x^2-3x+2=6\\)",
    },
    {
      id: 3,
      content: "\\(f(x)=x^2-3x+2-6=0\\)",
    },
    { id: 4, content: "\\(x^2-3x-4=0\\)" },

    {
      id: 5,
      title: "Aplique a fórmula de Bhaskara",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },

    {
      id: 6,
      title: "E considerando os valores:",
      content: "\\(a=1 \\text{, } b=-3 \\text{ e } c=-4\\)",
    },

    {
      id: 7,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4 \\cdot 1 \\cdot -4}}{2 \\cdot 1}\\)",
    },

    { id: 8, content: "\\(x = \\frac{3 \\pm \\sqrt{9 + 16}}{2}\\)" },

    {
      id: 9,
      content: "\\(x = \\frac{3 \\pm \\sqrt{25}}{2}\\)",
    },

    {
      id: 10,
      content: "\\(x = \\frac{3 \\pm 5}{2}\\)",
    },

    {
      id: 11,
      title: "E então:",
      content: "\\(x_1 = \\frac{3 + 5}{2}\\)",
    },
    {
      id: 12,
      content: "\\(x_1 = \\frac{8}{2} = 4\\)",
    },

    {
      id: 13,
      content: "\\(x_2 = \\frac{3 - 5}{2}\\)",
    },
    {
      id: 14,
      content: "\\(x_2 = \\frac{-2}{2} = -1  \\)",
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
