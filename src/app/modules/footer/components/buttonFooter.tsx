import styles from './buttonFooter.module.css'
import Icon from '@/app/components/icon/icon'

export default function ButtonFooter () {
    return (
        <button className={styles['button-footer']} type='button' onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
            <Icon icon={'footer-arrow'}></Icon>
        </button>
    )
}