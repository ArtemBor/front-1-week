import Icon from '@/app/components/icon/icon'
import styles from './about.module.css'

export default function About () {
    return (
        <section className={styles.about}>
            <div className={styles['about__info']}>
                <h2 className={styles['about__title']}>About schrift</h2>
                <img className={styles.img} src="/images/about.png" alt="Круги"/>
            </div>
            <div className={styles['about__card']}>
                <p className={styles['about__card-text']}>Schrift is a graphic design agency focused on clarity, impact, and purpose. We deliver designs that communicate powerfully and authentically</p>
                <ul className={styles['about__card-list']}>
                    <li className={styles['about__card-item']}>
                        <Icon icon={'card'}></Icon>
                        <div className={styles['about__card-info']}>
                        <Icon icon={'cub'}></Icon>  
                        <h3 className={styles['about__card-title']}>Precision</h3>
                        <p className={styles['about__card-list-text']}>Every detail counts at Schrift. We believe in designing with intention, where every element serves a purpose.</p>
                        </div>
                    </li>
                    <li className={styles['about__card-item']}>
                        <Icon icon={'card'}></Icon>
                        <div className={styles['about__card-info']}>
                        <Icon icon={'storm'}></Icon>  
                        <h3 className={styles['about__card-title']}>Bold</h3>
                        <p className={styles['about__card-list-text']}>Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement.</p>
                        </div>
                    </li>
                    <li className={styles['about__card-item']}>
                        <Icon icon={'card'}></Icon>
                        <div className={styles['about__card-info']}>
                        <Icon icon={'circle'}></Icon>  
                        <h3 className={styles['about__card-title']}>Client - centered</h3>
                        <p className={styles['about__card-list-text']}> Your vision is our priority. We work closely with clients, valuing open communication and feedback at every step.</p>
                        </div>
                    </li>
                    <li className={styles['about__card-item']}>
                        <Icon icon={'card'}></Icon>
                        <div className={styles['about__card-info']}>
                        <Icon icon={'star'}></Icon>  
                        <h3 className={styles['about__card-title']}>Creative excellence</h3>
                        <p className={styles['about__card-list-text']}>Our team is composed of experienced designers who bring fresh, innovative perspectives to each project</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}