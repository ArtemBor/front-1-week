import { title } from 'process'
import styles from './aboutCards.module.css'
import Icon from '@/app/components/icon/icon'

type TProps = {
    title: string,
    label: string,
}

export default function AboutCards (props: TProps) {
    return (
        <li className={styles.card}>
            <Icon icon={'aboutCard'}></Icon>
            <div className={styles['card__info']}>
            <Icon icon={'cub'}></Icon>  
            <h3 className={styles['card__title']}>{props.title}</h3>
            <p className={styles['card__text']} dangerouslySetInnerHTML={{ __html: props.label }}></p>
            </div>
    </li>
    )
}