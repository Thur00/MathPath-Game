import styles from "./Footer.module.css";

const Footer = (props) => {
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
    <footer className={`${styles.footer} ${styles[estilo]}`}>
      <h3>MATHPATH</h3>
      <p>Jogo educativo de matemática</p>
    </footer>
  );
};

export default Footer;
