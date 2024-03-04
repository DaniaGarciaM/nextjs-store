import styles from "./Description.module.sass"
import Image from "next/image"

const PLACE = "data:image/jpeg;base64,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";
export const Description = () => {
    return (
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.jpeg"
                    alt="products marketplace"
                    fill
                    placeholder="blur" 
                    blurDataURL={PLACE}/>
            </div>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}