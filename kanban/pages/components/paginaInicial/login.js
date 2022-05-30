//LOGIN
import Head from 'next/head'
import { useState } from "react"
import {useRouter} from "next/router"
import styles from "../../../styles/signup.module.css"

export default function Login() {
  const router = useRouter()
  const routerLogin = useRouter()
  const [loginData, setloginData] = useState({
    EmailAddress: "aaa@aaa.aa",
    Password: "password"
  })
  const login = async () => {
    
    const res = await fetch(
      '../../api/login', {
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    })
    const json = await res.json()

    //se a resposta for positiva, faz login
    if(res.status(200)) {
     routerLogin.push("/plataforma") 
    }
    console.log(loginData, res.status, json)
    
  }

  return (
    <div className={styles.body}>
      <Head>
        <title>OPPLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.containerE1}>
      <aside className={styles.containerD1}>
          <h1 className={styles.logo}>LOGO</h1>
          <div className={styles.imagem1}>IMAGEM</div>
          <p>Welcome to your new Job!</p>
        </aside>

        <form
        className={styles.containerForm} 
        onSubmit={(e) => { 
          e.preventDefault(), 
          login() }}>

          <label> Email
            <input
              className={styles.input}
              type="email"
              onChange={(e) => setloginData({ ...loginData, EmailAddress: e.target.value })}
              name="description"
              placeholder="Email"
              autoComplete="off"
              required />
          </label>

          <label> Password
            <input
              className={styles.input}
              type="password"
              name="description"
              onChange={(e) => setloginData({ ...loginData, Password: e.target.value })}
              placeholder="Inserir Password"
              autoComplete="off"
              required /></label>

          <button
            className={styles.button1}
            value="Sign Up"
            onClick={ () => router.push('/plataforma')}>
            Login
          </button>
            {/* <h3>{JSON.stringify(loginData)}</h3> */}
        </form>
        

        <footer className={styles.footer}><button onClick={() => router.push('/')}>Go back</button> copyright</footer>
      </main>
    </div>
  )
}