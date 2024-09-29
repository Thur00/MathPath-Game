import MathComponent from "./components/CardMath";
import Card from "./components/CardRes";

export default function Home() {
  const formulaTeste = `$$x = {-b \\pm \\sqrt{b^2 - 4 \\times a \\times c} \\over 2a}$$`;
  const formula1 = `\\(f(x) = 2x + 3 = 11\\)`;
  const formula2 = `\\(2x = 11 - 3\\)`;
  const formula3 = `\\(x = 8/2\\)`;
  const formula4 = `\\(x = 4\\)`;
  const tipo = "func";

  return (
    <div className="div">
      <h1>Equação Quadrática:</h1>
      <Card tipo={tipo} formula1={formula1} formula2={formula2} formula3={formula3} formula4={formula4} />
    </div>
  );
}
