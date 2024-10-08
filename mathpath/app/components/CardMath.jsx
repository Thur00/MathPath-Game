"use client";

import { useEffect } from "react";
import { mathJaxConfig } from "../mathjax.config";
import styles from "./CardMath.module.css";
import Head from "next/head";

export default function MathComponent(props) {
  useEffect(() => {
    let script;

    const loadMathJax = async () => {
      if (!window.MathJax) {
        script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          window.MathJax = MathJax;
          MathJax.config = mathJaxConfig;
          MathJax.startup.promise = MathJax.startup.promise
            .then(() => MathJax.typesetPromise())
            .catch((err) => console.error(err));
        };
      } else {
        MathJax.typesetPromise();
      }
    };

    loadMathJax();

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [props.formula]);

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
