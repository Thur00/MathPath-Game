// MathJaxProvider.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { mathJaxConfig } from "../mathjax.config";

const MathJaxContext = createContext(null);

export function MathJaxProvider({ children }) {
  const [mathJax, setMathJax] = useState(null);

  useEffect(() => {
    // Garantir que a configuração seja usada apenas no client-side
    if (typeof window !== "undefined") {
      if (!window.MathJax) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
        script.async = true;
        script.onload = () => {
          window.MathJax = MathJax;
          // MathJax só é configurado quando o script é carregado no client-side
          MathJax.config = mathJaxConfig;
          MathJax.startup.promise = MathJax.startup.promise
            .then(() => MathJax.typesetPromise())
            .catch((err) => console.error("Erro ao processar MathJax:", err));
          setMathJax(MathJax);
        };
        document.head.appendChild(script);
      } else {
        setMathJax(window.MathJax);
      }
    }
  }, []);

  return (
    <MathJaxContext.Provider value={mathJax}>
      {children}
    </MathJaxContext.Provider>
  );
}

export function useMathJax() {
  return useContext(MathJaxContext);
}
