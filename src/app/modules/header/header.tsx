'use client'
import Icon from "@/app/components/icon/icon"
import styles from "./header.module.css"
import { useState } from "react"


export default function Header() {
    const [isOpen, setIsOpen] = useState (false)
    

    return (
        <header className={styles.header}>
            <img className={styles.header__image} src="/images/logo.svg" alt="Логотип"></img>
            <nav className={styles.header__navigation}>
            <button className={styles['header__button-open']} onClick={() => setIsOpen(true)}><Icon icon={'burger'}></Icon></button>
            <div className={`${styles['header__navigation-container']} ${isOpen ? styles['header__navigation-container--open'] : ''}`}>
            <button className={styles['header__button-close']} onClick={() => setIsOpen(false)}><Icon icon={'close'}></Icon></button>
            <ul className={`${styles['header__navigation-list']}`}>
                <li className={styles['header__navigation-item']}>
                    <a href="">About</a>
                </li>
                <li className={styles['header__navigation-item']}>
                    <a href="">Services</a>
                </li>
                <li className={styles['header__navigation-item']}>
                    <a href="">Portfolio</a>
                </li>
                <li className={styles['header__navigation-item']}>
                    <a className={styles['header__navigation-link']} href="">Let's talk <div className={styles['header__navigation-icon']}><Icon icon={'arrow'}></Icon></div></a>
                </li>
            </ul>
            </div>
            </nav>
        </header>
    )
}