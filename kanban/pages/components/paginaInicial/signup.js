import Head from 'next/head'
// import {Formik, Form} from 'formik'
// import {TextField} from './TextField'

export default function Registo() {


  return (
    <>

      <Head>
        <title>OPPLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <aside>

          <h1>LOGOTIPO</h1>
          <p>Regista-te</p>
          {/* <img>VAI TER AQUI UMA IMAGEM</img> */}

        </aside>


        <form onSubmit={(e) => { e.preventDefault() }}>

          <label>Nome</label>
          <input type="text" autoComplete="off"></input><br />
          <label>Apelido</label>
          <input type="text" autoComplete="off"></input><br />

          <label>Contacto Móvel</label>
          <input type="tel"></input><br />

          <label>Email</label>
          <input type="email" name="description" placeholder="Email" autoComplete="off" /><br />

          <label>Password</label>
          <input type="password" name="description" placeholder="Inserir Password" autoComplete="off" /><br />

          <label>Confirmar Password</label>
          <input type="password" name="description" placeholder=""></input><br />

          <label>Aceitar Termos e Condições</label>
          <input type="checkbox" name=""></input><br />

          <input type="submit" value="Registar"></input>



        </form>



        <footer>copyright</footer>
      </main>
    </>
  )
}

