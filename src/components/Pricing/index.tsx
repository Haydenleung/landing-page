import Image from "next/image";
import styles from "./pricing.module.css"
import Link from "next/link";
import PricingCardOne from "../PricingCardOne";
import PricingCardTwo from "../PricingCardTwo";
import PricingCardThree from "../PricingCardThree";

export default function Pricing() {
    return (
        <main className={styles.container} id="pricing">
            <div className={styles.title}>Pricing & Plan</div>
            <div className={styles.card}>
                <PricingCardOne />
                <PricingCardTwo />
                <PricingCardThree />
            </div>
        </main>
    );
}
