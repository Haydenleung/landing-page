import Image from "next/image";
import styles from "./header.module.css"
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Header() {
    return (
        <main className={styles.header}>
            <Image src={'/image/logo_color.svg'} alt={"logo"} width={400} height={200} className={styles.logo} />
            <div className={styles.container}>
                <Link className={styles.bold} href="/">Home</Link>
                <div>Team</div>
                <div>Contact</div>
                <button className={styles.button}>Sign Up</button>
            </div>
        </main>
    );
}
