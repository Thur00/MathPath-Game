//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para encontrar a raízes de:",
      content: "\\(2x^2 - 8x + c = 0 \\)",
    },
    {
      id: 2,
      title: "Comece substituindo c por 8:",
      content: "\\(2x^2 - 8x + 8 = 0 \\)",
    },
    {
      id: 4,
      title: "Aplicando a fórmula de Bhaskara:",
      content:
        "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },
    {
      id: 5,
      title: "E considerando os valores:",
      content: "\\(a=2 \\text{, } b=-8 \\text{ e } c=8 \\)",
    },
    {
      id: 6,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-8) \\pm \\sqrt{(-8)^2 - 4 \\cdot 2 \\cdot 8}}{2 \\cdot 2}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{8 \\pm \\sqrt{64 - 64}}{4}\\)",
    },
    {
      id: 8,
      content: "\\(x = \\frac{8 \\pm \\sqrt{0}}{4}\\)",
    },
    {
      id: 9,
      content: "\\(x = \\frac{8 \\pm 0}{4}\\)",
    },
    {
      id: 11,
      content: "\\(x = \\frac{8}{4} = 2\\)",
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
