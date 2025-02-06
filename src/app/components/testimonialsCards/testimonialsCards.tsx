import Icon from '../icon/icon'
import styles from './testimonials.module.css'

type TProps = {
    title: string,
    titleText: string,
    text: string,
}

export default function TestimonialsCards (props: TProps) {
    return (
        <li className={styles.card}>
            <Icon icon={'card-testimonials'} ></Icon>
            <div className={styles['card__testimonials-info']}>  
                <h3 className={styles['card__testimonials-title']}>{props.title}</h3>
                <p className={styles['card__testimonials-text']}>{props.titleText}</p>
            </div>
            <p className={styles['card__text-description']}>{props.text}</p>
    </li>
    )
}