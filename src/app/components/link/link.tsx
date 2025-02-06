import { Url } from 'url'
import styles from './link.module.css'

type TProps = {
    label: string,
    url: string,
}

export default function Link (props: TProps) {
    return (
            <a href={props.url}>{props.label}</a>     
    )
}