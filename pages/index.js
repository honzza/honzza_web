import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>honzza dvorak | web developer</title>
      </Head>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.logo}>honzza dvorak.</h1>
          <nav>
            <ul className={styles.ul}>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
