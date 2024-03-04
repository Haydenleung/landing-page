import Image from "next/image";
import styles from "./banner.module.css"
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Banner() {
    return (
        <main className={styles.container}>
            <div className={styles.title}><span>How It Works</span></div>
            <div className={styles.subContianer}>
                <div className={styles.content}>
                    <div className={styles.step}>
                        <Image src="/image/weatherapi.png" alt="" width={100} height={100} className={styles.logo} />
                        <div>
                            <div className={styles.subTitle}>Step 1: Weather Forecast</div>
                            <p className={styles.body}>Using OpenWeather API, we fetch real-time weather data for Vancouver, ensuring you have the most up-to-date information for your outdoor plans.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <Image src="/image/tripapi.png" alt="" width={100} height={100} className={styles.logo} />
                        <div>
                            <div className={styles.subTitle}>Step 2: Activity Recommendations</div>
                            <p className={styles.body}> Leveraging the TripAdvisor API, we analyze local attractions, events, and activities in Vancouver, providing you with tailored suggestions based on weather conditions.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.threeD}>
                    <Spline scene="https://prod.spline.design/A0vDyghIRde1Lbim/scene.splinecode" />
                </div>
            </div>
        </main >
    );
}
