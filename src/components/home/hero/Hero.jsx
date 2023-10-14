import styles from './hero.module.scss'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h1 className='text-4xl font-bold mb-5'>HOGWARTS LEGACY</h1>
                <p className='text-4xl font-bold'>EDICION ESTANDAR</p>
                <div className='flex mt-10 items-end'>
                    <span className={styles.discount}>
                        -24%
                    </span>
                    <p className='ms-5 text-3xl'>45.60$</p>
                </div>
                <div className={styles.buttons}>
                    <button className='w-100'>Comprar</button>
                    <button className='w-100'>Mas juegos</button>
                </div>
            </div>
        </section>
    )
}

export default Hero