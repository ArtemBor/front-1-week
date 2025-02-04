'use client'
import styles from "./header.module.css"
import { useState } from "react"


export default function Header() {
    const [isOpen, setIsOpen] = useState (false)
    

    return (
        <header className={styles.header}>
            <img className={styles.header__image} src="/images/logo.svg" alt="Логотип"></img>
            <nav className={styles.header__navigation}>
            <button className={styles['header__button-open']} onClick={() => setIsOpen(true)}>Open</button> {/* сделать бургер */}
            <div className={`${styles['header__navigation-container']} ${isOpen ? styles['header__navigation-container--open'] : ''}`}>
            <button className={styles['header__button-close']} onClick={() => setIsOpen(false)}>Close</button> {/* сделать крестик */}
            <ul className={`${styles['header__navigation-list']}`}> {/* Спросить */}
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
                    <a href="">Let's talk</a> {/* сделать стрелку */}
                </li>
            </ul>
            </div>
            </nav>
        </header>
    )
}