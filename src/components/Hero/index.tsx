import Image from "next/image";
import styles from "./hero.module.css"
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Hero() {
    return (
        <main className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.title}>VANPLAN</div>
                <div className={styles.subTitle}>Plan Your Adventures<br />with Precision</div>
                <Link href="/#pricing">
                    <button className={styles.button}>
                        Get Started
                    </button>
                </Link>
            </div>
            <div className={styles.graphic}>
                <Spline scene="https://prod.spline.design/HRYjBO43IYGCFyde/scene.splinecode" />
            </div>
        </main>
    );
}
