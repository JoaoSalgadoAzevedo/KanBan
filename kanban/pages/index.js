import Head from 'next/head'
import styles from "../styles/Home.module.css"
//import vector from "../../../public/Vector.png"
import {useRouter} from "next/router"

export default function Landing() {
  const router = useRouter()
  return (
    <div className={styles.body}>
      <Head>
        <title>OPPLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container1}>

        <content className={styles.containerE1}>
        <div className={styles.logoDivlock}>
          <img src="../../../public/Vector.png" alt="logo" />
          <span className={styles.fontQuote}><p>Welcome to your new Job!</p></span>
        </div>


          {/* BOTOES!!!! */}
          <div className={styles.verticalContainer1}>
            <button 
            className={styles.button1} 
            label="Sign Up" 
            onClick={() => router.push('/components/paginaInicial/signup')}
            >Sign Up
            </button>
            <button 
            className={styles.button1} 
            label="Log In" 
            onClick={() => router.push('/components/paginaInicial/login')}
            >Login
            </button> 
          </div>

         
      <footer className={styles.fontAboutUs.verticalContainer2}>
          <span className={styles.fontAboutUs}>
            <a href="https://github.com/JoaoSalgadoAzevedo/KanBan" className={styles.fontAboutUs}>About-us</a></span>
          <span className={styles.fontAboutUs}>
            <a href="https://github.com/JoaoSalgadoAzevedo/KanBan" className={styles.fontAboutUs}>
              FAQs</a></span>
          <a href="https://facebook.com" /> 
     </footer>
        </content>

        <aside className={styles.containerD1}>
          <div className={styles.boxInfo}>

          </div>
          <span className={styles.fontCopyright}><p>©2022 Opplog. All rights reserved</p></span>
        </aside>
        
      </main>


    </div>
  )
}