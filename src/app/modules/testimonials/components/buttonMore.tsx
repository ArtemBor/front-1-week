import styles from './buttonMore.module.css'
import { ReactElement } from "react"

type TProps = {
    label: string,
    icon: ReactElement
    onClick?: () => void
}

export default function ButtonMore (props:TProps) {
    return (
        <button className={styles['button__more']} onClick={props.onClick}>{props.label} {props.icon}</button>
    )
}