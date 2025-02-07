'use client';
import PortfolioCards from '@/app/components/portfolioCards/portfolioCards'
import styles from './portfolio.module.css'
import { useState } from 'react'

export default function Portfolio () {
    const cards = [
        {
            id: 1,
            labelNumber: '01',
            labelText: 'Caspian forest',
            path: '/images/forest.jpg'
        },
        {
            id: 2,
            labelNumber: '02',
            labelText: 'Alchemed',
            path: '/images/alchemed.jpg'
        },
        {
            id: 3,
            labelNumber: '03',
            labelText: 'Capsule',
            path: '/images/capsule.jpg'
        },
        {
            id: 4,
            labelNumber: '04',
            labelText: 'Swoosh!',
            path: '/images/swoosh.jpg'
        },
    ]
    const [activeCardId, setActiveCardId] = useState<null | number>(cards[0].id)
    const activeCard = cards.find((card) => card.id === activeCardId)
    return (
        <section className={styles.portfolio} id={'portfolioId'}>
            <div className={styles['portfolio__info']}>
                <h2 className={styles['portfolio__info-title']}>
                    Featured Portfolio
                </h2>
                <div className={styles['portfolio__hover']}>
                    <p className={styles['portfolio__hover-text']}>Hover on the list</p>
                    { activeCard && (
                        <img className={styles['portfolio__hover-img']} src={activeCard.path} alt={activeCard.labelText} />
                    )}
                </div>
            </div>
            <div className={styles['portfolio__description']}>
                <p className={styles['portfolio__description-text']}>
                    Explore how Schrift transforms bold ideas into impactful designs. From branding to digital experiences, our work reflects precision, clarity, and purpose.
                </p>
                <ul className={styles['portfolio__description-list']}>
                    {cards.map((card) => (
                        <PortfolioCards
                            key={card.id}
                            id={card.id}
                            setActiveCardId={setActiveCardId}
                            labelNumber={card.labelNumber}
                            labelText={card.labelText}
                            isActive={activeCardId === card.id}
                        ></PortfolioCards>
                    ))}
                </ul>
            </div>
        </section>
    )
}