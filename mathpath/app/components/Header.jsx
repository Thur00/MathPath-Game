import styles from "./Header.module.css";
import Image from "next/image";

import laranjaClaro from "../src/Mathpath-Title-laranjaClaro.png"
import laranjaEscuro from "../src/Mathpath-Title-laranjaEscuro.png"
import azulClaro from "../src/Mathpath-Title-azulClaro.png"
import azulEscuro from "../src/Mathpath-Title-azulEscuro.png"
import rosaClaro from "../src/Mathpath-Title-rosaClaro.png"
import rosaEscuro from "../src/Mathpath-Title-rosaEscuro.png"
import preto from "../src/Mathpath-Title-preto.png"

const Header = (props) => {
  let imgURL;
  switch (props.tipo) {
    case "func":
      imgURL = laranjaClaro;
      break;
    case "eq":
      imgURL = azulClaro;
      break;
    case "quad":
      imgURL = rosaClaro;
      break;
    case "funce":
      imgURL = laranjaEscuro;
      break;
    case "eqe":
      imgURL = azulEscuro;
      break;
    case "quade":
      imgURL = rosaEscuro;
      break;
    default:
      imgURL = preto;
  }

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={imgURL}
        alt="MathPath logo"
        width={165.75}
        height={48}
        priority
      />
    </header>
  );
};

export default Header;
