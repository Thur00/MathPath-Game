//Page.jsx
import Card from "@/app/components/CardRes";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Quest() {
  const tipo = "mainScreen";

  return (
    <main className={`main ${tipo}`}>
      <Header tipo={tipo} />
      <div className="div">
        <h1>Bem vindo ao MathPath</h1>
      </div>
      <Footer tipo={tipo} />
    </main>
  );
}
