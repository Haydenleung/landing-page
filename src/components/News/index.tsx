import Image from "next/image";
import styles from "./news.module.css"
import Link from "next/link";

export default function News() {
    return (
        <main className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.title}>Subscribe to Our Newletter</div>
                <div className={styles.subTitle}>Stay updated with the latest weather forecasts, outdoor activities, and exclusive promotions!</div>
                <form className={styles.form}>
                    <input className={styles.input}
                        placeholder="Enter Your Email"></input>
                    <button className={styles.button}>
                        <Image src={"/image/arrow.svg"} alt={"arrow"} width={10} height={10} />
                    </button>
                </form>
            </div>
        </main >

    );
}
