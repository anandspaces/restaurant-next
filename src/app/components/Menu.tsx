import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
              src="/dish2.jpeg"
              alt="image"
              width={300}
              height={300}
              />
            </div>
            <div className={styles.cardDescription}> 
              <p>GoodFood GoodLife</p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
              src="/dish3.jpeg"
              alt="image"
              width={300}
              height={300}
              />
            </div>
            <div className={styles.cardDescription}> 
              <p>GoodFood GoodLife</p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
              src="/dish4.jpeg"
              alt="image"
              width={300}
              height={300}
              />
            </div>
            <div className={styles.cardDescription}> 
              <p>GoodFood GoodLife</p>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image
              src="/dish5.jpeg"
              alt="image"
              width={300}
              height={300}
              />
            </div>
            <div className={styles.cardDescription}> 
              <p>GoodFood GoodLife</p>
            </div>
        </div>
    </div>
  )
}
