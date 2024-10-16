// import Card from "./components/CardRes";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// export default function Home() {
//   const formulaTeste = `$$x = {-b \\pm \\sqrt{b^2 - 4 \\times a \\times c} \\over 2a}$$`;
//   const tipo = "func";

//   const contas = [
//     {
//       id: 1,
//       title: "Para encontrar o valor de x em",
//       content: `\\(f(x) = 2x + 3 = 11\\)`,
//     },
//     {
//       id: 2,
//       title: "Devemos tirar três dos dois lados:",
//       content: `\\(2x = 11 - 3\\)`,
//     },
//     {
//       id: 3,
//       title: "E então isolar o x:",
//       content: `\\(x = 8/2\\)`,
//     },
//     { id: 4, title: "Calculando:", content: `\\(x = 4\\)` },
//   ];

//   return (
//     <main className={tipo}>
//       <Header tipo={tipo} />
//       <div className="div">
//         <h1>Equação Quadrática:</h1>
//         <Card tipo={tipo} contas={contas} />
//       </div>
//       <Footer tipo={tipo} />
//     </main>
//   );
// }

import * as React from "react";
import Head from "next/head";

export default function Index() {
  // this will come from getStaticProps()
  const data = [
    {
      question:
        "<p>\\(x = \\frac{-2 \\pm \\sqrt{2^2 - 4 \\cdot (-1) \\cdot (3)}}{2 \\cdot (-1)}\\)  </p>\r",
    },
    {
      question:
        "\\(x = \\frac{-2 \\pm \\sqrt{2^2 - 4 \\cdot (-1) \\cdot (3)}}{2 \\cdot (-1)}\\)\r",
    },
    {
      question:
        "\\(x = \\frac{-2 \\pm \\sqrt{2^2 - 4 \\cdot (-1) \\cdot (3)}}{2 \\cdot (-1)}\\)",
    },
  ];
  return (
    <>
      <Head>
        <script
          id="MathJax-script"
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        ></script>
      </Head>
      <div>
        <div>
          <h1>
            Next.js v5 example {`\\frac{1}{2}`} {`\\textit{ml}`}
          </h1>

          {`\\(\\textit{ml}\\)`}

          {data.map(({ question }, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: question }} />
          ))}
        </div>
      </div>
    </>
  );
}
