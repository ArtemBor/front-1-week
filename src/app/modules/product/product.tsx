import Icon from "@/app/components/icon/icon"
import styles from "./product.module.css"
import Button from "@/app/components/button/button"

export default function Product() {
    return (
        <section className={styles.product}>
            <div className={styles['product__info-top']}>
            <div className={styles['product__info-date']}>
                <p className={styles['product__info-top-date']}>Est 21.12.24</p>
                <p className={styles['product__info-top-text']}>A place where design philosophy blends innovation and clarity to create impactful solutions</p>
            </div>
            <img className={styles['product__images']} src="/images/product-scaner.png" alt="Штрих-код" />
            </div>
            <h1 className={styles['product__title']}>The Art of Bold Precision</h1>
            <div className={styles['product__info-bottom']}>
                <p className={styles['product__info-bottom-text']}>Bold Visions. Precise Execution</p>
                <div className={styles['product__info-border']}></div>
                <Button label={'Discover our work'} icon={<Icon icon={'arrow'}></Icon>}></Button>
            </div>
        </section>
    )
}