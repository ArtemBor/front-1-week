import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container/container";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container>
          <Image src={'/'} alt={'asdad'} width={100} height={100}></Image>
        </Container>
      </main>
    </div>
  );
}
