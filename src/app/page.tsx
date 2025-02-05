import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./modules/header/header";
import Product from "./modules/product/product";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles['page__background']}>
        <Container>
          <Header></Header>
        </Container>
        <Container>
        <Product></Product>
        </Container>
        </div>
      </main>
    </div>
  );
}
