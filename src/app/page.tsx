import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/container/container";
import Header from "./modules/header/header";
import Product from "./modules/product/product";
import About from "./modules/about/about";
import Services from "./modules/services/services";
import Portfolio from "./modules/portfolio/portfolio";
import Testimonials from "./modules/testimonials/testimonials";
import Footer from "./modules/footer/footer";

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
        <Container>
        <About></About>
        </Container>
        <Container>
        <Services></Services>
        </Container>
        <div className={styles['portfolio__background']}>
        <Container>
        <Portfolio></Portfolio>
        </Container>
        </div>
        <Container>
        <Testimonials></Testimonials>
        </Container>
        <Container>
        <Footer></Footer>
        </Container>
      </main>
    </div>
  );
}
