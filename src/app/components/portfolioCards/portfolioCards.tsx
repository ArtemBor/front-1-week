import { Dispatch, SetStateAction } from 'react'
import styles from './portfolioCards.module.css'

type TProps = {
    labelNumber: string,
    labelText: string,
    id: number,
    setActiveCardId: Dispatch<SetStateAction<number | null>>
    isActive: boolean
}

export default function PortfolioCards (props:TProps) {
    const onCardClick = () => {
        props.setActiveCardId(props.id)
    }

    return (
        <li onClick={onCardClick} onMouseEnter={onCardClick} className={`${styles.card} ${props.isActive ? styles['card--active'] : ''}`}>
            <p className={styles['card__text']}>{props.labelNumber}</p>
            <p className={styles['card__text']}>{props.labelText}</p>
            <img className={styles['card__image']} src="/images/description-scaner.png" alt="Штрих-код" />
        </li>
    )
}