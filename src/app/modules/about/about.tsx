import styles from './about.module.css'
import AboutCards from './components/aboutCards/aboutCards'

export default function About () {
    return (
        <section className={styles.about} id={'aboutId'}>
            <div className={styles['about__info']}>
                <h2 className={styles['about__title']}>About schrift</h2>
                <img className={styles['about__image']} src="/images/about.png" alt="Круги"/>
            </div>
            <div className={styles['about__card']}>
                <p className={`${'text'}`}>Schrift is a graphic design agency focused on clarity, impact, and purpose. We deliver designs that communicate powerfully and authentically</p>
                <ul className={styles['about__card-list']}>
                    <AboutCards title={'recision'} label={'Every&nbsp;detail&nbsp;counts&nbsp;at&nbsp;Schrift. We believe in designing with intention, where every element serves a purpose.'}></AboutCards>
                    <AboutCards title={'Bold'} label={'Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement.'}></AboutCards>
                    <AboutCards title={'Client - centered'} label={'Your&nbsp;vision&nbsp;is&nbsp;our&nbsp;priority.We&nbsp;work closely with clients, valuing open communication and feedback at every step.'}></AboutCards>
                    <AboutCards title={'Creative excellence'} label={'Our team is composed of experienced&nbsp;designers&nbsp;who bring&nbsp;fresh,&nbsp;innovative perspectives to each project.'}></AboutCards>
                </ul>
            </div>
        </section>
    )
}