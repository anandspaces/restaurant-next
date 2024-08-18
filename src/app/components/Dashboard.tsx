import styles from "./dashboard.module.css"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className={styles.boardWrapper}>
      <div className={styles.boardWrapperInside}>
        <div className={styles.boardDescription}>
          Authentic Taste of Bihar blended with exotic flavour
        </div>
        <div className={styles.boardImage}>
          {/* <Image
          src="/bg.jpg"
          alt="image"
          fill={true}
          /> */}
        </div>
      </div>
    </div>
  )
}
