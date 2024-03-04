import Image from "next/image";
import styles from "./pricingcard.module.css"
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function PricingCardOne() {
    return (
        <main className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.threeD}>
                    <Spline scene="https://prod.spline.design/KADoPAaacZj-l6vP/scene.splinecode" />
                </div>
                <div className={styles.title}>Starter</div>
                <div className={styles.subTitle}>Best for Beginners</div>
                <div className={styles.price}>Free</div>
                <ul className={styles.list}>
                    <li>
                        Location Searching
                    </li>
                    <li>
                        Current Weather
                    </li>
                    <li>
                        5 Days Weather Forecast
                    </li>
                </ul>
            </div>
            <button className={styles.button}>Select Plan</button>
        </main >

    );
}
