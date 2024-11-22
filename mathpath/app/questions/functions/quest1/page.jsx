//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "Para encontrar o valor de x em",
      content: "\\(f(x) = 2x + 3 = 11\\)",
    },
    {
      id: 2,
      title: "Devemos isolar o x para encontrar a solução, então movemos os termos constantes para um lado:",
      content: "\\(2x = 11 - 3\\)",
    },
    {
      id: 3,
     content: "\\(f(x)=2x=8\\)",
    },
    { id: 4, title: "Agora movemos o 2, que passa dividindo:", content: "\\(f(x)=\\frac{8}{2}\\)" },
  
      { id: 5,content: "\\(f(x)=4\\)" },
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
