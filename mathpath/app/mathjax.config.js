// mathjax.config.js
export const mathJaxConfig = {
  loader: {
    load: ["[tex]/html", "[tex]/color", "[tex]/ams", "[tex]/noerrors"],
  },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    packages: ["base", "ams", "html", "color", "noerrors", "noundefined"],
  },
  chtml: {
    scale: 1.1, // Escala para aumentar/diminuir o tamanho das fórmulas
    minScale: 0.5, // Escala mínima permitida
    matchFontHeight: true, // Ajusta o tamanho da fórmula ao tamanho do texto ao redor
  },
};

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
