import Head from 'next/head'
import { useState } from "react"
import {useRouter} from "next/router"
import styles from "../../../styles/signup.module.css"



export default function Signup() {
  const router = useRouter()
  const routerLogin = useRouter()


  const [signupData, setSignupData] = useState({
    FirstName: 'name',
    LastName: 'name',
    EmailAddress: "aaa@aaa.aa",
    Password: 'password',
    passwordConfirmation: 'passwordConf',
    terms: false
  })

  const submit = async () => {
    const res = await fetch(
      '../../api/signUp', {
      body: JSON.stringify(signupData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    })
    const json = await res.json()
    // if(res.status(200) ) {
    //   
    // }
    console.log(signupData, res.status, json)
    routerLogin.push("/components/paginaInicial/login")
    
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
          <div className={styles.logo}>LOGO</div>
          <div className={styles.imagem1}>IMAGEM</div>
        </aside>

        <form 
        className={styles.containerForm}
          onSubmit={ (e) => {
              e.preventDefault(),
              submit()
            }
            }>
 <span>SIGN UP</span>
          <label> First Name
            <input 
            className={styles.input}
              type="text"
              onChange={(e) => setSignupData({ ...signupData, FirstName: e.target.value })}
              autoComplete="off"></input>
          </label>

          <label> Last Name
            <input className={styles.input}
              type="text"
              onChange={(e) => setSignupData({ ...signupData, LastName: e.target.value })}
              autoComplete="off"></input>
          </label>  

          <label> Email
            <input className={styles.input}
              type="email"
              name="description"
              onChange={(e) => setSignupData({ ...signupData, EmailAddress: e.target.value })}
              placeholder="Email" autoComplete="off" />
          </label>

          <label> Password
            <input className={styles.input}
              type="password"
              name="description"
              placeholder="Inserir Password"
              onChange={(e) => setSignupData({ ...signupData, Password: e.target.value })}
              autoComplete="off" />
          </label>

          <label> Repeat Password
            <input className={styles.input}
              type="password"
              name="description"
              onChange={(e) => setSignupData({ ...signupData, passwordConfirmation: e.target.value })}
              placeholder=""
              autoComplete="off"></input>
          </label>

          <label> Accept terms
            <input
              type="checkbox"
              required
              onChange={(e) => setSignupData({ ...signupData, terms: !signupData.terms })}
              name=""></input>
          </label>

          <button className={styles.button1}
            value="Sign Up">
              Submit
          </button>
           
        </form>
        
        <footer className={styles.footer}><button onClick={() => router.push('/')}>Go back</button> copyright</footer>
      </main>
    </div>
  )
}