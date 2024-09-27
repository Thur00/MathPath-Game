import MathComponent from "./components/CardMath";

export default function Home() {
  const formula1 = `$$x = {-b \\pm \\sqrt{b^2 - 4 \\times a \\times c} \\over 2a}$$`;
  const formula2 = `\\(\\frac{a}{b}\\)`;
  return (
    <div>
      <h1>Equação Quadrática:</h1>
      <MathComponent tipo="func" formula={formula1} />
    </div>
  );
}