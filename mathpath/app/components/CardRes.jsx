import MathComponent from "./CardMath";
import styles from "./CardRes.module.css";

const Card = (props) => {
  const { tipo, formula1, formula2, formula3, formula4 } = props;
  return (
    <div className={styles.card}>
      <p>Para encontrar o valor de x em</p>
      <MathComponent tipo={tipo} formula={formula1} />
      <p>Devemos tirar três dos dois lados:</p>
      <MathComponent tipo={tipo} formula={formula2} />
      <p>E então isolar o x:</p>
      <MathComponent tipo={tipo} formula={formula3} />
      <p>Calculando:</p>
      <MathComponent tipo={tipo} formula={formula4} />
    </div>
  );
};

export default Card;
