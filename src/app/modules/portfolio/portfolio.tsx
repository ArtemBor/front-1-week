import PortfolioCards from '@/app/components/portfolioCards/portfolioCards'
import styles from './portfolio.module.css'

export default function Portfolio () {
    return (
        <section className={styles.portfolio} id={styles.portfolioId}>
            <div className={styles['portfolio__info']}>
                <h2 className={styles['portfolio__info-title']}>
                    Featured Portfolio
                </h2>
                <div className={styles['portfolio__hover']}>
                    <p className={styles['portfolio__hover-text']}>Hover on the list</p>
                </div>
            </div>
            <div className={styles['portfolio__description']}>
                <p className={styles['portfolio__description-text']}>
                    Explore how Schrift transforms bold ideas into impactful designs. From branding to digital experiences, our work reflects precision, clarity, and purpose.
                </p>
                <ul className={styles['portfolio__description-list']}>
                    <PortfolioCards labelNumber={'01'} labelText={'Caspian forest'}></PortfolioCards>
                    <PortfolioCards labelNumber={'02'} labelText={'Alchemed'}></PortfolioCards>
                    <PortfolioCards labelNumber={'03'} labelText={'Capsule'}></PortfolioCards>
                    <PortfolioCards labelNumber={'04'} labelText={'Swoosh!'}></PortfolioCards>
                </ul>
            </div>
        </section>
    )
}