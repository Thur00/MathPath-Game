//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "A partir daq nao feito",
      content: "\\(f(x)= x^2-2x+1\\)",
    },
    {
      id: 2,
      title: "Iguale a equação a 4",
      content: "\\(f(x)= x^2-2x+1=4\\)",
    },
    {
      id: 3,
      title: "Reorganize os termos",
      content: "\\(f(x)= x^2-2x+1-4=0\\)",
    },
    { id: 4, content: "\\(f(x)= x^2-2x-3=0\\)" },

    { id: 5, 
     title: "Aplique a fórmula de Bhaskara",
      content: "\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4 \\cdot a \\cdot c}}{2 \\cdot a}\\)"},

      {
      id: 6,
      title: "E considerando os valores:",
      content: "\\(a=1 \\text{, } b=-2 \\text{ e } c=-3\\)"},

    { 
      id: 7,
      title: "Substitua os valores e resolva:",
      content:
        "\\(x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 + 12 \\cdot a \\cdot c}}{2 \\cdot a}\\)",
    },

    {     id: 8,
      content: "\\(x = \\frac{2 \\pm \\sqrt{4 + 12}}{2}\\)",
    },

     {
      id: 9,
      content: "\\(x = \\frac{2 \\pm \\sqrt{16}}{2}\\)",
    }, 

    {
      id: 10,
      content: "\\(x = \\frac{2 \\pm 4}{2}\\)",
    },

     {
      id: 11,
      title: "E então:",
      content: "\\(x_1 = \\frac{2 + 4}{2}\\)",
    },
       {
      id: 12,
      content: "\\(x_1 = \\frac{6}{2} = 3\\)",
    },

     {
      id: 13,
      content: "\\(x_2 = \\frac{2 - 4}{2}\\)",
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
