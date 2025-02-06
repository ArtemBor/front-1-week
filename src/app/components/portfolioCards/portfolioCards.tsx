import styles from './portfolioCards.module.css'

type TProps = {
    labelNumber: string,
    labelText: string,
}

export default function PortfolioCards (props:TProps) {
    return (
        <li className={styles.card}>
            <p className={styles['card__text']}>{props.labelNumber}</p>
            <p className={styles['card__text']}>{props.labelText}</p>
            <img className={styles['card__image']} src="/images/description-scaner.png" alt="Штрих-код" />
        </li>
    )
}