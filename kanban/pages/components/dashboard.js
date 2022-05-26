import Head from 'next/head'
import Coluna1 from './colunas/coluna1'
import Coluna2 from './colunas/coluna2'
import Coluna3 from './colunas/coluna3'
import Coluna4 from './colunas/coluna4'
import Coluna5 from './colunas/coluna5'


export default  function Dashboard() {

  return (
    <div>

    <Head>
    <title>OPPLOG</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <body>
    <div className='menuBar'>
    <p>
        <Coluna1 />
        <Coluna2 />
        <Coluna3 />
        <Coluna4 />
        <Coluna5 />
        </p>

    </div>

    </body>

    </div>
    

  )
}

