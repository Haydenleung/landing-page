import Image from "next/image";
import styles from "./pricingcard.module.css"
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function PricingCardTwo() {
    return (
        <main className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.threeD}>
                    <Spline scene="https://prod.spline.design/X4nSXL3vE5wWtUV0/scene.splinecode" />
                </div>
                <div className={styles.title}>Professional</div>
                <div className={styles.subTitle}>Best for Tourists</div>
                <div className={styles.price}>$8 <span className={styles.month}>/ Month</span></div>
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
                    <li>
                        Multiple Profiles
                    </li>
                    <li>
                        Favourite List
                    </li>
                </ul>
            </div>
            <button className={styles.button}>Select Plan</button>
        </main >

    );
}
