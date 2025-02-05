import { ReactElement } from "react"
import Icon from "../icon/icon"
import styles from "./button.module.css"

type TProps = {
    label: string,
    icon: ReactElement
}

export default function Button (props: TProps) {
    return (
        <button className={styles['button']}>{props.label} {props.icon}</button> /* сделать стрелку */
    )
}