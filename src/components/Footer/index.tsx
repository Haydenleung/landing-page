import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

export default function Footer() {
    return (
        <main className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.copywrite}>© Hayden Leung</div>
                <div>|</div>
                <Link href="" className={styles.link}>Vanplan Project</Link>
            </div>
        </main >

    );
}
