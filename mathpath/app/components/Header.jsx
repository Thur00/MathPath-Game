import Image from "next/image";
import styles from "./Header.module.css";

const Header = (props) => {
  let imgURL;
  switch (props.tipo) {
    case "func":
      imgURL = "https://nextjs.org/icons/next.svg";
      break;
    case "eq":
      imgURL = "https://nextjs.org/icons/next.svg";
      break;
    case "quad":
      imgURL = "https://nextjs.org/icons/next.svg";
      break;
    default:
      imgURL = "https://nextjs.org/icons/next.svg";
  }

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={imgURL}
        alt="MathPath logo"
        width={100}
        height={50}
        priority
      />
    </header>
  );
};

export default Header;
