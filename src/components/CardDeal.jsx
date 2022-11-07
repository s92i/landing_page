import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button styles='mt-10' />
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt='Card' className='w-[100%] h-[100%]' />
            </div>
        </section>
    )
}

export default CardDeal