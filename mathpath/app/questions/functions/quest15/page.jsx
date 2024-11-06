import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest15() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Podemos começar igualando a função da seguinte maneira:",
      content: " \\(-x^2 + 2x + 8 = 5\\)",
    },
    {
      id: 2,
      title: "Em seguida subtraia 5 de ambos os lados:",
      content: "\\(-x^2 + 2x + 8 = 5 \\)",
    },
    {
      id: 3,
      content: "\\(-x^2 + 2x + 3 = 0\\)",
    },
    {
      id: 4,
      title: "Aplicando a fórmula de Bhaskara",
      content: "se \\(a = -1\\), \\(b = 2\\) e \\(c = -2 \\)",
    },
    {
      id: 5,
      content:
        "\\(x = \\frac{-2 \\pm \\sqrt{2^2 - 4 \\cdot (-1) \\cdot (3)}}{2 \\cdot (-1)}\\)",
    },
    {
      id: 6,
      content: "\\(x = \\frac{-2 \\pm \\sqrt{4 + 12}}{-2}\\)",
    },
    {
      id: 7,
      content: "\\(x = \\frac{-2 \\pm \\sqrt{16}}{-2}\\)",
    },
    {
      id: 8,
      title: "Solução 1:",
      content: "\\(x_1 = \\frac{-2 + 4}{-2} = \\frac{2}{-2} = -1 \\)",
    },
    {
      id: 9,
      title: "Solução 2:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
    },
    {
      id: 1111,
      title: "aaaaaa:",
      content: "\\(x_2 = \\frac{-2 - 4}{-2} = \\frac{-6}{-2} = 3 \\)",
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
