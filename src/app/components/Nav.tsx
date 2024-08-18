import styles from "./nav.module.css";

export default function Nav() {
  // function click(){
  //   window.alert("hello world");
  // }
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>Patna Palate</div>
      <div className={styles.subtitle}>
        <div className={styles.subtitles}>Home</div>
        <div className={styles.subtitles}>Story</div>
        <div className={styles.subtitles}>Menu</div>
        <div className={styles.subtitles}>Our Updates</div>
        <div className={styles.subtitles}>Contacts</div>
      </div>
      <div className={styles.buttonWrapper}>
        {/* <button onClick={click}>Reservation</button> */}
      </div>
    </div>
  )
}
