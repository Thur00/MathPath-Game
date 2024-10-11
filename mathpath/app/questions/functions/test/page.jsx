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
