import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./components/header/header"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container>
          <Header></Header>
        </Container>
      </main>
    </div>
  );
}
