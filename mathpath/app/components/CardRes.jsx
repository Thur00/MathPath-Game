import MathComponent from "./CardMath";
import styles from "./CardRes.module.css";

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
