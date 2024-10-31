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
      }, 100); // Ajustar o tempo conforme necessário para garantir que todos os componentes estejam montados

      return () => clearTimeout(timeoutId);
    }
  }, [formattedContent]);

  let tipo;
  switch (props.tipo) {
    case "func":
      tipo = "func";
      break;
    case "eq":
      tipo = "eq";
      break;
    case "quad":
      tipo = "quad";
      break;
    case "funce":
      tipo = "func";
      break;
    case "eqe":
      tipo = "eq";
      break;
    case "quade":
      tipo = "quad";
      break;
    default:
      tipo = "";
  }

  let estilo = styles[tipo];

  return (
    <>
      <p className={`${styles.math} ${estilo}`}>{props.conta}</p>
    </>
  );
}
