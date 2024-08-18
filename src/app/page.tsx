import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";


export default function Home() {
  const itemData = [
    {img:'/dish1.jpeg',title:'image'},
    {img:'/dish2.jpeg',title:'image'},
    {img:'/dish3.jpeg',title:'image'},
    {img:'/dish4.jpeg',title:'image'},
    {img:'/dish5.jpeg',title:'image'},
    {img:'/dish6.jpeg',title:'image'},

  ]
  return (
    <div>
      
  <div className={styles.container}>
    <Nav/>
    <Dashboard/>
    <Menu />
    {/* <h1 className={styles.headings}>Welcome to Patna Palate</h1>
    <div className={styles.boxing}>
      <p className={styles.para}>Place of delicious tastes of Bihar remixed with exotic dishes.</p>
        <Image
          className={styles.image}
          src="/i1.jpeg"
          alt="image"
          fill={true}
        />
    </div> */}
  </div>  
    </div>
  );
}
