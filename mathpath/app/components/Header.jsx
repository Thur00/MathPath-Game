import Image from "next/image"


const Header = () => {
    return (
        <header className={styles.header}>
            <Image 
                className={styles.logo}
                src="https://nextjs.org/icons/next.svg"
                alt="MathPath logo"
                width={180}
                height={38}
                priority
            />
        </header>
    )
}

export default Header