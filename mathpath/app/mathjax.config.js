// mathjax.config.js
export const mathJaxConfig = {
  loader: { load: ['[tex]/html', '[tex]/color'] },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],  // Adiciona suporte para $
    displayMath: [['$$', '$$'], ['\\[', '\\]']], // Para exibições maiores
    packages: ['base', 'ams', 'html', 'color'],
  }
};
