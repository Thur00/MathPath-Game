//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "quad";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de c na equação:",
      content: "\\(x^2 + 6x + c = 0\\)",
    },
    {
      id: 2,
      title: "A raiz da equação é x logo, sabendo que x = -3:",
      content: "\\((-3)^2 + 6 \\cdot (-3) + c = 0\\)",
    },
    {
      id: 3,
      title: "Assim podemos continuar a resolver:",
      content: "\\(9 -18 + c = 0\\)",
    },
    {
      id: 4,
      title: "Isole o c:",
      content: "\\(c = -9 + 18\\)	",
    },
    {
      id: 5,
      content: "\\(c= 9\\)",
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
