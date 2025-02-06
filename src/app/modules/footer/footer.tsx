import styles from './footer.module.css'
import Link from '@/app/components/link/link'
import Icon from '@/app/components/icon/icon'


export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer__top']}>
                <Link url = {'https://dribbble.com/'} label={'Dribbble'}></Link>
                <Link url = {'https://www.behance.net//'} label={'Behance'}></Link>
                <Link url = {'https://www.instagram.com/'} label={'Instagram'}></Link>
                <Link url = {'https://twitter.com/'} label={'Twitter'}></Link>
                <p className={styles['footer__top-logo']}>Schrift</p>
            </div>
            <div className={styles['footer__center']}>
                <h2 className={styles['footer__center-title']}>Create bold ideas together</h2>
                <Link url = {'mailto:HELLO@SCHRIFT.COM'} label='Hello@schrift.com'></Link>
            </div>
            <div className={styles['footer__bottom']}>
                <p className={styles['footer__bottom-text']}>© Copyright Schrift 2024</p>
                <Icon icon={'footer-arrow'}></Icon>
            </div>
        </footer>
    )
}