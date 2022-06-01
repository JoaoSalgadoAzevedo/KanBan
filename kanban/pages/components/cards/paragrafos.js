import { useState, useEffect } from "react"
import styles from "../../../styles/Home.module.css"
import form from "../../../styles/formulario.module.css"
export default function OpenCardEdit() {

  const [edit, setEdit] = useState(false)

  const [cardData, setCardData] = useState({
    stateFunnel: "",
    creationDate: "",
    observations: "",
    companyName: "",
    companylocation: "",
    companyLink: "",
    offerSource: "",
    jobFunction: "",
    salaryRangeMin: "",
    salaryRangeMax: "",
    offerLink: "",
    regime: "",
    nomeRecruiter: "",
    emailRecruiter: "",
    telRecruiter: "",
    linkedinRecruiter: "",
    appointmentData: "",
    appointmentLocation: "",
    appoimentInformation: "",
    lastAppointment: ""
  });

  useEffect(() => {
    async function callCard() {
      const res = await fetch(
        '../../api/catchCard', {
        method: "GET"
      })
      console.log(res)
      const json = await res.json()
      setCardData(json.a)
      console.log("Fim do UseEffect")
    }
    callCard()
  }, [])


  const editCard = async () => {
    const res = await fetch(
      '../../api/editCard', {
      body: JSON.stringify(cardData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    })
    const json = await res.json() 
    console.log(cardData, res.status, json)
  }

  return (
    //TODOS OS INPUTS PRECISAM DE APRESENTAR PLACEHOLDER: CardData.XXXXX
    <div>
      <span>
        <form
        className={form.formMaindiv} 
        onSubmit={(e) => {
          e.preventDefault()
          editCard()
          //AQUI LEVA A FUNCAO DE SUBMIT
        }}>
        
          <div className={form.topcontainer}>
          <div className={form.companiDiv}>
          <div className="companyINFO" >

            <fieldset className={form.formFormat}>
              <h3 className={form.fontDisplay}>Company INFO</h3>

              <label className={form.fontTitle}>Co. Name</label><br />
              <p>{cardData.companyName}</p>
              <br />
            

              <label className={form.fontTitle}>Does it have a website?</label><br />
              <p>Company Link: {cardData.companyLink}</p>
              <br />

              <label className={form.fontTitle}>From where?</label><br />
              <p>Location: {cardData.companyLocation}</p>
              <br />
            </fieldset>


          </div>
          <div className="functionDATA" >
            <fieldset className={form.formFormat}>
              <legend>


                <h3 className={form.fontDisplay}>Job Function</h3>
              </legend>

              <label className={form.fontTitle}>Job Function</label><br />
              <p>Job Function: {cardData.jobFunction}</p>
              

              <br /><label className={form.fontTitle}>Offer Source</label><br />
              <p>Offer Source: {cardData.offerSource}</p>
              

              <br /><label className={form.fontTitle}>Offer Link</label><br />
              <p>Offer Link: {cardData.offerLink}</p>
              

              <br /><label className={form.fontTitle}>Salary Range Between</label>
              <p>Salary Range Between: {cardData.salaryRangeMax} - {cardData.salaryRangeMin}</p>
              
                <select className={form.placeHolderBox}>
                  
                  <option>Euro   â¬</option>
                  <option>Dolar  $</option>
                  <option>Cenas ai</option>

                  </select><br />




                <label className={form.fontTitle} id="Regime">Regime:</label>
                <p>Regime: {cardData.regime}</p>
                
                
                <datalist  id="regimes">


              <option value="Presencial">
               
              </option>


              <option value="Remote">
               
              </option>

              <option value="Hybrid">
                
              </option>

                </datalist>
                <label className={form.fontTitle} id="Estado">State Funnel:</label>
                <p>State Funnel: {cardData.stateFunnel}</p>
                
                
                
                <datalist  id="state">


              <option value="Interest">
               
              </option>


              <option value="Application Sent">
               
              </option>

              <option value="Interview">
                
              </option>

              <option value="Awaiting Response">
                
              </option>

              <option value="Decision">
                
              </option>

                </datalist>


            </fieldset>
          </div>

          </div>
        <div>
          <label className={form.fontDisplay}>Observations</label><br />
          <textarea 
          className={form.placeholder2} 
          onChange={(e) => setCardData({ ...cardData, observations: e.target.value })} 
          type="text"
          placeholder={cardData.observations}></textarea><br />
        </div>
        </div>



        <div className={form.bottomcontainer}>
              <div className="recruiterINFO" >
                <fieldset className={form.formFormat}>
                  <h3 className={form.fontDisplay}>Interviewer Contact INFO</h3>

                  <label className={form.fontTitle}>Name</label><br />
                  <p>{cardData.nomeRecruiter}</p>
                  <br />

                  <label className={form.fontTitle}>Email</label><br />
                  <p>Email: {cardData.emailRecruiter}</p>
                  

                  <br /><label className={form.fontTitle}>Contact</label><br />
                  <p>Contact: {cardData.telRecruiter}</p>
                  

                  <br /><label className={form.fontTitle}>Linkedin</label><br />
                  <p>Linkedin: {cardData.linkedinRecruiter}</p>
                  <br />
                </fieldset>

              </div>
              <div className={form.containerCorrect.interviewINFO}>

                <h3 className={form.fontDisplay}>Interview</h3>

                <label className={form.fontTitle}>Location</label>
                <p>Location: {cardData.appointmentLocation}</p>
                <br />

                <label className={form.fontTitle}>Next Interview</label>
                <p>Next Interview: {cardData.appointmentData}</p>
                <br />

                <label className={form.fontTitle}>Last Interview</label>
                <p>Last Interview: {cardData.lastAppointment}</p>
               

                <br />


              </div>
              <div>
               <label className={form.fontDisplay}>Additional Info</label><br />
                <p>Additional Info:  {cardData.appoimentInformation}</p><br /> 
              </div>
              
          </div>
{/* Aqui no botao de submit Ã© que ele vai fazer o route de volta para a plataforma */}
        <span>
          <br /><br /><input className={styles.button1} type="submit"></input>
          <input className={styles.button1} type="reset"></input>
          <button className={styles.button1}>Go back</button>
          
        </span>
          

<p>bom dia</p>
        </form>
        
      </span>
      <span>

      </span>


    </div>
  )
}