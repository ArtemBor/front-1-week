import Button from '@/app/components/button/button'
import styles from './testimonials.module.css'
import TestimonialsCards from '@/app/components/testimonialsCards/testimonialsCards'
import Icon from '@/app/components/icon/icon'


export default function Testimonials () {
    return (
        <section className={styles.testimonials}>
            <div className={styles['testimonials__top']}>
                <h2 className={styles['testimonials__top-title']}>
                    WHAT THEY SAY
                </h2>
                <p className={styles['testimonials__top-text']}>
                    Our clients are at the heart of everything we do. Hear from the visionaries, innovators, and leaders who’ve partnered with Schrift to bring bold ideas to life through precise, impactful design.
                </p>
            </div>
            <ul className={styles['testimonials__item']}>
                <TestimonialsCards title={'Sophia Nguyen'} titleText={'Founder of Lumina Tech'} text={'Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!'}></TestimonialsCards>
                <TestimonialsCards title={'Isabelle Martinez'} titleText={'Director at GreenSphere'} text={'Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success.'}></TestimonialsCards>
                <TestimonialsCards title={'Liam Carter'} titleText={'Co-founder of VentureStudio'} text={'Schrift\'\s designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience.'}></TestimonialsCards>
                <TestimonialsCards title={'Amara Okafor'} titleText={'CEO of NovaEdge'} text={'The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!'}></TestimonialsCards>
                <TestimonialsCards title={'Priya Mehta'} titleText={'COO of Elevate Systems'} text={'Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market.'}></TestimonialsCards>
                <TestimonialsCards title={'Carlos Rivera'} titleText={'Founder of Arc & Co'} text={'From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity.'}></TestimonialsCards>
            </ul>
                <Button label={'Show more'} icon={<Icon icon={'arrow'}></Icon>}></Button>
        </section>
    )
}