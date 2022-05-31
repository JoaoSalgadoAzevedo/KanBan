import Head from 'next/head'
import Coluna1 from './colunas/coluna1'
import Coluna2 from './colunas/coluna2'
import Coluna3 from './colunas/coluna3'
import Coluna4 from './colunas/coluna4'
import Coluna5 from './colunas/coluna5'
import styles from "../../styles/colunas.module.css"


export default function Dashboard() {

  return (
    <>

      <Head>
        <title>OPPLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.paginaDash}>



        <div className={styles.colunas1}>

          <Coluna1 />
        </div>

        <div className={styles.colunas1}>
          <Coluna2 />

        </div>

        <div className={styles.colunas1}>
          <Coluna3 />

        </div>


        <div className={styles.colunas1}>
          <Coluna4 />

        </div>


        <div className={styles.colunas1}>
          <Coluna5 />

        </div>








      </div>


    </>


  )
}