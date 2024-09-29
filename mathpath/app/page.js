import MathComponent from "./components/CardMath";
import Card from "./components/CardRes";

export default function Home() {
  const formulaTeste = `$$x = {-b \\pm \\sqrt{b^2 - 4 \\times a \\times c} \\over 2a}$$`;
  const tipo = "func";

  const contas = [
    {name: 'formula1', title: 'Para encontrar o valor de x em', content: `\\(f(x) = 2x + 3 = 11\\)`},
    {name: 'formula2', title: 'Devemos tirar três dos dois lados:', content: `\\(2x = 11 - 3\\)`},
    {name: 'formula3', title: 'E então isolar o x:', content: `\\(x = 8/2\\)`},
    {name: 'formula4', title: 'Calculando:', content: `\\(x = 4\\)`},
  ]

  return (
    <div className="div">
      <h1>Equação Quadrática:</h1>
      <Card tipo={tipo} contas={contas} />
    </div>
  );
}
