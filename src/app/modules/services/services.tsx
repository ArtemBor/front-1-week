import styles from './services.module.css'

export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles['services__top']}>
                <h2 className={styles['services__top-title']}>What we provide</h2>
                <p className={styles['services__top-text']}>we transform ideas into impactful designs. From brand identities to digital experiences, our services blend creativity and strategy to make your vision stand out</p>
            </div>
            <div className={styles['services__card']}>
            <ul className={styles['services__card-item']}>
                <li className={styles['services__card-list']}>

                </li>
                <li className={styles['services__card-list']}>

                </li>
                <li className={styles['services__card-list']}>

                </li>
                <li className={styles['services__card-list']}>

                </li>
            </ul>
            </div>
        </section>
    )
}