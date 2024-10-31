//CardRes.jsx
import styles from "./CardRes.module.css";
import MathComponent from "./CardMath";

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
