import styles from "./Footer.module.css";
import Image from "next/image";
import preto from "../src/Mathpath-Title-preto.png"
import branco from "../src/Mathpath-Title-branco.png"

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
    case "funce":
      estilo = "func";
      break;
    case "eqe":
      estilo = "eq";
      break;
    case "quade":
      estilo = "quad";
      break;
    default:
      estilo = "";
  }

  return (
    <footer className={`${styles.footer} ${styles[estilo]}`}>
      <Image
        className={styles.logo}
        src={branco}
        alt="MathPath logo"
        width={110.5}
        height={32}
        priority
      />
      <p>Jogo educativo de matemática</p>
    </footer>
  );
};

export default Footer;
