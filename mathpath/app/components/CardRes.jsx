import styles from "./CardRes.module.css";
import dynamic from "next/dynamic";

const MathComponent = dynamic(() => import("./CardMath"), {
  ssr: false, // Desativa a renderização do lado do servidor para este componente
});

const Card = (props) => {
  const { tipo, contas } = props;

  return (
    <div className={styles.card}>
      {contas.map((conta) => {
        return (
          <span className={styles.span} key={conta.id}>
            <p>{conta.title}</p>
            <MathComponent tipo={tipo} conta={conta.content} />
          </span>
        );
      })}
    </div>
  );
};

export default Card;
