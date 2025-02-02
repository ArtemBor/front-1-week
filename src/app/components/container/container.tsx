
import { ReactElement } from "react";
import styles from "./container.module.css";

type TProps = {
    children: ReactElement
}

export default function Container(props: TProps) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}