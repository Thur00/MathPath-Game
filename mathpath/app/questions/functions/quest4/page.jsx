//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "func";

  const contas = [
    {
      id: 1,
      title: "Se f(0)= -5, qual o valor de b na função:",
      content: "\\(f(x)=-x^2+ bx -5 = -5\\)",
    },
    {
      id: 2,
      title: "Substitua X por 0 e iguale a equação a -5:  ",
      content: "\\(f(x)=-0^2+ b \\cdot 0 -5 = -5\\)",
    },
    {
      id: 3,
      content: "\\(f(x)= 0 + 0b -5 = -5\\)",
    },
    {
      id: 4,
      title: "Após realizar as multiplicações de x, iguale a equação a 0. ",
      content: "\\(f(x)= 0 + 0 - 5 + 5 = 0\\)",
    },
    {
      id: 5,
      title: "Após realizar as multiplicações de x, iguale a equação a 0. ",
      content: "\\(f(x)= 0 + 0b + 0 = 0\\)",
    },
    {
      id: 6,
      title:
        "Nesse caso, como multiplicamos o b por 0, significa que, nessa equação,  b pode assumir qualquer valor.",
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
