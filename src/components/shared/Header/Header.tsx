import Link from "next/link";
import styles from "./Header.module.sass";

export const Header = () => {
    console.log('Header')
    return (
        <header>
            <nav>
                <ul className={styles.Header__list}>
                    <Link href="/">
                        <li className={styles.Header__ancla}>Home</li>
                    </Link>
                    <Link href="/store">
                        <li className={styles.Header__ancla}>Store</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}