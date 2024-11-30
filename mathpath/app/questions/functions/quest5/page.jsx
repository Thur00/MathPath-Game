//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "Para descobrir o valor de a na função:",
      content: "\\(f(x)=ax+1\\)",
    },
    {
      id: 2,
      title:
        "Substitua o valor de x por 3 e iguale a equação a 10 para depois resolvê-la",
      content: "\\(f(3)=a.3+1=10\\)",
    },
    {
      id: 3,
      title: "Agora junte os termos semelhantes para isolar o a:",
      content: "\\(3a=10-1\\)",
    },
    { id: 4, content: "\\(3a=9\\)" },
    {
      id: 5,
      content: "\\(a= \\frac{9}{3}\\)",
    },

    {
      id: 6,
      content: "\\(a=3\\)",
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
