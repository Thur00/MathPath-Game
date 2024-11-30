//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "sendo x=2, determine o resultado da função:",
      content: "\\(f(x)=3x-7\\)\\)",
    },
    {
      id: 2,
      title: "Substitua x por 2",
      content: "\\(f(x)= 3 \\cdot 2 -7\\)",
    },
    {
      id: 3,
      title: "E então resolva normalmente:",
      content: "\\(f(x)= 6-7\\)",
    },
    { id: 4, title: "Calculando:", content: "\\(f(x)=-1\\)" },
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
