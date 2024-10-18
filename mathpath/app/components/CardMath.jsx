//CardMath.jsx
"use client";

import { useEffect, useMemo } from "react";
import { useMathJax } from "../contexts/MathJaxProvider";
import styles from "./CardMath.module.css";

export default function MathComponent(props) {
  const MathJax = useMathJax();

  const formattedContent = useMemo(() => props.conta, [props.conta]);

  useEffect(() => {
    if (MathJax) {
      const timeoutId = setTimeout(() => {
        MathJax.typesetPromise().catch((err) =>
          console.error("Erro ao processar MathJax:", err)
        );
      }, 100); // Ajuste o tempo conforme necessário para garantir que todos os componentes estejam montados

      return () => clearTimeout(timeoutId);
    }
  }, [formattedContent]);

  let estilo;
  switch (props.tipo) {
    case "func":
      estilo = "func";
      break;
    case "eq":
      estilo = "eq";
      break;
    case "quad":
      estilo = "quad";
      break;
    default:
      estilo = "";
  }

  return (
    <>
      <p className={`${styles.math} ${styles[estilo]}`}>{props.conta}</p>
    </>
  );
}
