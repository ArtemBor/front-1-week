'use client';
import ButtonMore from './components/buttonMore';
import styles from './testimonials.module.css'
import TestimonialsCards from '@/app/modules/testimonials/components/testimonialsCards/testimonialsCards'
import Icon from '@/app/components/icon/icon'
import { useState } from 'react'


export default function Testimonials () {
    const cards = [
        {
            title: 'Sophia Nguyen',
            titleText: 'Founder of Lumina Tech',
            text: 'Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!',
        },
        {
            title: 'Isabelle Martinez',
            titleText: 'Director at GreenSphere',
            text: 'Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success.'
        },
        {
            title: 'Liam Carter',
            titleText: 'CEO of NovaEdge',
            text: 'Schrift\'\s designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience.',
        },
        {
            title: 'Amara Okafor',
            titleText: 'Director at GreenSphere',
            text: 'The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!'
        },
        {
            title: 'Priya Mehta',
            titleText: 'COO of Elevate Systems',
            text: 'Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market.'
        },
        {
            title: 'Carlos Rivera',
            titleText: 'Founder of Arc & Co',
            text: 'From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity.'
        },
        {
            title: 'Sophia Nguyen',
            titleText: 'Founder of Lumina Tech',
            text: 'Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!',
        },
        {
            title: 'Isabelle Martinez',
            titleText: 'Director at GreenSphere',
            text: 'Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success.'
        },
        {
            title: 'Liam Carter',
            titleText: 'CEO of NovaEdge',
            text: 'Schrift\'\s designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience.',
        },
        {
            title: 'Amara Okafor',
            titleText: 'Director at GreenSphere',
            text: 'The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!'
        },
        {
            title: 'Priya Mehta',
            titleText: 'COO of Elevate Systems',
            text: 'Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market.'
        },
        {
            title: 'Carlos Rivera',
            titleText: 'Founder of Arc & Co',
            text: 'From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity.'
        }
    ]

    const INITIAL_CARDS_VIEW = 6
    const [isShow, setIsShow] = useState(false)
    const filteredCards = cards.filter((card, index) => {
        return isShow || (index < INITIAL_CARDS_VIEW)
    })
    return (
        <section className={styles.testimonials}>
            <div className={styles['testimonials__top']}>
                <h2 className={styles['testimonials__top-title']}>
                    WHAT THEY SAY
                </h2>
                <p className={`${'text'}`}>
                    Our clients are at the heart of everything we do. Hear from the visionaries, innovators, and leaders who’ve partnered with Schrift to bring bold ideas to life through precise, impactful design.
                </p>
            </div>
            <ul className={styles['testimonials__list']}>
                {filteredCards.map((card, index) => (
                    <TestimonialsCards key={index} title={card.title} titleText={card.titleText} text={card.text}></TestimonialsCards>
                ))}
            </ul>
            {!isShow && (
                <ButtonMore label={'See more'} onClick={() => setIsShow(true)} icon={<Icon icon={'arrow-more'}></Icon>}></ButtonMore>
            )}
        </section>
    )
}