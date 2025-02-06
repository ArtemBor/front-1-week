import ServicesCards from '@/app/components/servicesCards/servicesCards'
import styles from './services.module.css'


export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles['services__top']}>
                <h2 className={styles['services__top-title']}>What we provide</h2>
                <p className={styles['services__top-text']}>we transform ideas into impactful designs. From brand identities to digital experiences, our services blend creativity and strategy to make your vision stand out</p>
            </div>
            <ul className={styles['services__item']}>
                    <ServicesCards number={'01'} title={'Brand Identity Design'} label={'We create memorable brand identities that resonate with your audience. From logos to complete visual systems, we ensure your brand stands out with clarity and impact.'}></ServicesCards>
                    <ServicesCards number={'02'} title={'Web Design & Development'} label={'Your website is your digital storefront. We design and develop websites that combine bold aesthetics with functionality, ensuring an intuitive experience for your users.'}></ServicesCards>
                    <ServicesCards number={'03'} title={'Motion Graphics & Animation'} label={'Bring your brand to life with dynamic animations and motion graphics. We create captivating visuals that engage and leave a lasting impression.'}></ServicesCards>
                    <ServicesCards number={'04'} title={'Creative Consultation'} label={'Have a vision but not sure how to bring it to life? Our creative experts collaborate with you to develop bold and precise strategies tailored to your brand goals.'}></ServicesCards>
            </ul>
        </section>
    )
}