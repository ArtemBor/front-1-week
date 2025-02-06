import styles from './servicesCards.module.css'

type TProps = {
    number: string,
    title: string,
    label: string,
}
    

export default function ServicesCards (props: TProps) {
    return (
        <li className={styles.card}>
            <p className={styles['card__number']}>{props.number}</p>
            <h3 className={styles['card__title']}>{props.title}</h3>
            <p className={styles['card__text']}>{props.label}</p>
        </li>
    )
}