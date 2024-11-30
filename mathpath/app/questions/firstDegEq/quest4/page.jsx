//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em:",
      content: "\\(4x - 9 = 2x + 15 \\)",
    },
    {
      id: 2,
      title: "É necessário a seguinte manipulação:",
      content: "\\(4x - 2x  =  15 + 9\\)",
    },
    {
      id: 3,
      content: "\\(2x =  24\\)",
    },
    {
      id: 4,
      title:
        "E como o valor de x está dobrado, é necessário que seja dividido por 2:",
      content: "\\(x = \\frac{24}{2}\\)",
    },
    { id: 5, content: "\\(x=12\\)" },
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
