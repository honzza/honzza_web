import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h1>honzza dvorak.</h1>
        <nav>
          <ul className={styles.navbarul}>
            <li>
              <Link href="/">
                <a className={styles.navitem}>home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className={styles.navitem}>portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles.navitem}>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
