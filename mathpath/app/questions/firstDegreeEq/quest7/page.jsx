//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "eq";

  const contas = [
    {
      id: 1,
      title: "Para descobrir o valor de x na equação:",
      content: "\\( 3x + 8 = 2x + 17 \\)",
    },
    {
      id: 2,
      title:
        "Primeiramente é necessário separar os valores com x dos números sozinhos:",
      content: "\\(3x - 2x = 17 - 8\\)",
    },
    {
      id: 3,
      title: "e ai resolver:",
      content: "\\(x=9\\)",
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
