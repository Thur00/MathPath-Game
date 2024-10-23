// mathjax.config.js
export const mathJaxConfig = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    loader: {
      load: ["input/tex", "output/chtml"],
    },
    packages: ["base", "ams", "html", "noerrors", "noundefined"],
  },
  chtml: {
    scale: 1.1, // Escala para aumentar/diminuir o tamanho das fórmulas
    minScale: 0.5, // Escala mínima permitida
    matchFontHeight: true, // Ajusta o tamanho da fórmula ao tamanho do texto ao redor
  },
};

//----------------------------------------------

// useEffect(() => {
//   // Configuração do MathJax
//   window.MathJax = {
//     tex: {
//       inlineMath: [
//         ["$", "$"],
//         ["\\(", "\\)"],
//       ],
//       displayMath: [
//         ["$$", "$$"],
//         ["\\[", "\\]"],
//       ],
//     },
//     loader: {
//       load: ["input/tex", "output/chtml"],
//     },
//     chtml: {
//       fontURL: "/mathjax/fonts", // Caminho relativo para as fontes locais
//     },
//   };

//   // Adiciona o script do MathJax dinamicamente
//   const script = document.createElement("script");
//   script.src = "/mathjax/es5/tex-chtml.js";
//   script.async = true;
//   document.head.appendChild(script);

//   return () => {
//     document.head.removeChild(script);
//   };
// }, []);

//------------------------------------------

// export const mathJaxConfig = {
//   loader: { load: ["input/tex", "output/chtml"] },
//   tex: {
//     inlineMath: [
//       ["$", "$"],
//       ["\\(", "\\)"],
//     ],
//     displayMath: [
//       ["$$", "$$"],
//       ["\\[", "\\]"],
//     ],
//     processEscapes: true, // Permite escapadas de \$.
//   },
//   chtml: {
//     scale: 1.1, // Escala para aumentar/diminuir o tamanho das fórmulas
//     minScale: 0.5, // Escala mínima permitida
//     matchFontHeight: true, // Ajusta o tamanho da fórmula ao tamanho do texto ao redor
//   },
// };
