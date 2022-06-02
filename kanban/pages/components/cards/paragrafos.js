import { useState, useEffect } from "react"
import styles from "../../../styles/Home.module.css"
import form from "../../../styles/formulario.module.css"
// import { render } from "react-dom/cjs/react-dom.production.min";

import { render } from "react-dom";
export default function OpenCardEdit(props) {

  // const [openAndEdit, setOpenAndEdit] = useState(false)

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
    
    <>
    
    <button onClick={() => props.setViewCard(props.CardId)}>EDITARMERDAS</button>
    
    <div>
      <span>
        <form
        className={form.formMaindiv2} 
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
              
            

              <label className={form.fontTitle}>Does it have a website?</label><br />
              <p>{cardData.companyLink}</p>
              

              <label className={form.fontTitle}>From where?</label><br />
              <p>{cardData.companyLocation}</p>
              
            </fieldset>


          </div>
          <div className="functionDATA" >
            <fieldset className={form.formFormat}>
              <legend>


                <h3 className={form.fontDisplay}>Job Function</h3>
              </legend>

              <label className={form.fontTitle}>Job Function</label>
              <p>{cardData.jobFunction}</p>
              

              <br /><label className={form.fontTitle}>Offer Source</label>
              <p>{cardData.offerSource}</p>
              

              <br /><label className={form.fontTitle}>Offer Link</label>
              <p>{cardData.offerLink}</p>
              

              <label className={form.fontTitle}>Salary Range Between</label>
              <p>{cardData.salaryRangeMax}{cardData.salaryRangeMin}</p>

              
                <select className={form.placeHolderBox}>
                  
                  <option>Euro   €</option>
                  <option>Dolar  $</option>
                  <option>Cenas ai</option>

                  </select>




                <label className={form.fontTitle} id="Regime">Regime:</label>
                <p>{cardData.regime}</p>
                
                
                <datalist  id="regimes">


              <option value="Presencial">
               
              </option>


              <option value="Remote">
               
              </option>

              <option value="Hybrid">
                
              </option>

                </datalist>
                <label className={form.fontTitle} id="Estado">State Funnel:</label>
                <p>{cardData.stateFunnel}</p>
                
                
                
                <datalist  id="state">


              <option value="Interest">
               
              </option>


              <option value="Application Sent">
               
              </option>

              <option value="Interview">
                
              </option>

              <option value="Awaiting Response">
                
              </option>

              <option value="Closed">
                
              </option>

                </datalist>


            </fieldset>
          </div>

          </div>
        <div><br/>
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

                  <label className={form.fontTitle}>Name</label>
                  <p>{cardData.nomeRecruiter}</p>
                

                  <label className={form.fontTitle}>Email</label>
                  <p>{cardData.emailRecruiter}</p>
                  

                  <label className={form.fontTitle}>Contact</label>
                  <p>{cardData.telRecruiter}</p>
                  

                  <label className={form.fontTitle}>Linkedin</label>
                  <p>{cardData.linkedinRecruiter}</p>
                  
                </fieldset>

              </div>
              <div className={form.containerCorrect.interviewINFO}>

                <h3 className={form.fontDisplay}>Interview</h3>

                <label className={form.fontTitle}>Location</label>
                <p>{cardData.appointmentLocation}</p>
                

                <label className={form.fontTitle}>Next Interview</label>
                <p>{cardData.appointmentData}</p>
                

                <label className={form.fontTitle}>Last Interview</label>
                <p>{cardData.lastAppointment}</p>
               


              </div>
              <div>
               <label className={form.fontDisplay}>Additional Info</label><br />
                <p>{cardData.appoimentInformation}</p>
              </div>
              
          </div>
{/* Aqui no botao de submit Ã© que ele vai fazer o route de volta para a plataforma */}
        <span className={styles.spanBotoes}>
          <input className={styles.button1} type="submit"></input>
          <input className={styles.button1} type="reset"></input>
          <button className={styles.button1}>Go back</button>
          <button className={styles.button1} onClick={render(

<div>
<span>



  <form
  className={form.formMaindiv} 
  onSubmit={(e) => {
    e.preventDefault()
    editCard()
    // router.push("/plataforma")
    //AQUI LEVA A FUNCAO DE SUBMIT
  }}>
  
    <div className={form.topcontainer}>
    <div className={form.companiDiv}>
    <div className="companyINFO" >

      <fieldset className={form.formFormat}>
        <h3 className={form.fontDisplay}>Company INFO</h3>

        <label className={form.fontTitle}>Co. Name</label><br />
        <input
        className={form.placeHolderBox}
        type="text"
        autoComplete="off"
        onChange={(e) => setCardData({ ...cardData, companyName: e.target.value })}
        placeholder='Company Name'>
        </input><br />

        <label className={form.fontTitle}>Does it have a website?</label><br />
        <input 
        className={form.placeHolderBox}
        type="url"
        onChange={(e) => setCardData({ ...cardData, companyLink: e.target.value })}
        name="description" placeholder={cardData.companyLink}></input><br />

        <label className={form.fontTitle}>From where?</label><br />
        <input 
        className={form.placeHolderBox}
        type="text" 
        name=""
        onChange={(e) => setCardData({ ...cardData, companyLocation: e.target.value })}
        placeholder='Address'></input><br />
      </fieldset>


    </div>
    <div className="functionDATA" >
      <fieldset className={form.formFormat}>
        <legend><h3 
          className={form.fontDisplay}>
            Job Function</h3>
        </legend>

        <label 
        className={form.fontTitle}>
          Job Function</label><br />
        <input
        className={form.placeHolderBox} 
        type="text" 
        autoComplete="off"
        onChange={(e) => setCardData({ ...cardData, jobFunction: e.target.value })}
        placeholder='Working Position'></input>

        <br /><label className={form.fontTitle}>Offer Source</label><br />
        <input
        className={form.placeHolderBox} 
        type="url"
        onChange={(e) => setCardData({ ...cardData, offerSource: e.target.value })}
        name="description" placeholder='Where did you find it?' />

        <br /><label className={form.fontTitle}>Offer Link</label><br />
        <input
        className={form.placeHolderBox} 
        type="url"
        onChange={(e) => setCardData({ ...cardData, offerLink: e.target.value })}
        name="description" placeholder='Keep here the link' />

        <br /><label className={form.fontTitle} id="currency">Salary Range Between</label>
        <input
        className={form.placeHolderBox} 
        type="number"
        onChange={(e) => setCardData({ ...cardData, salaryRangeMin: e.target.value })}
        name="salary" min="200" max="5000"  step="25" />
        <label>-</label>
        <input
        className={form.placeHolderBox} 
        type="number"
        onChange={(e) => setCardData({ ...cardData, salaryRangeMax: e.target.value })}
        name="salary" min="200" max="5000" step="25" />
          
            
          <datalist className={form.placeHolderBox} id="currency">

              <option value="EUR €" />
              <option value="USD $" />
              <option value="GBP £" />
              <option value="SIM §" />

          </datalist><br />




          <label className={form.fontTitle} id="Regime">Regime:</label>
          <input
          className={form.placeHolderBox}
          list="regimes"
          id="Regime"
          name="regimes"
          placeholder="Selecione..." />
          
          
          <datalist  id="regimes">


        <option value="Presencial">
         
        </option>


        <option value="Remote">
         
        </option>

        <option value="Hybrid">
          
        </option>

          </datalist>
          <label className={form.fontTitle} id="Estado">State Funnel:</label>
          <input
          className={form.placeHolderBox}
          list="state"
          id="Estado"
          name="state"
          placeholder="Selecione..." />
          
          
          <datalist  id="state">


        <option value="Interest">
         
        </option>


        <option value="Application Sent">
         
        </option>

        <option value="Interview">
          
        </option>

        <option value="Awaiting Response">
          
        </option>

        <option value="Closed">
          
        </option>

          </datalist>


      </fieldset>
    </div>

    </div>
  <div>
    <label className={form.fontDisplay}>Observations</label><br />
    <textarea className={form.placeholder2} onChange={(e) => setCardData({ ...cardData, observations: e.target.value })} type="text"></textarea><br />
  </div>
  </div>



  <div className={form.bottomcontainer}>
        <div className="recruiterINFO" >
          <fieldset className={form.formFormat}>
            <h3 className={form.fontDisplay}>Interviewer Contact INFO</h3>

            <label className={form.fontTitle}>Name</label><br />
            <input className={form.placeHolderBox} type="text" autoComplete="off"
              onChange={(e) => setCardData({ ...cardData, nomeRecruiter: e.target.value })}
              placeholder='Person Name'></input><br />

            <label className={form.fontTitle}>Email</label><br />
            <input type="email"
              className={form.placeHolderBox}
              onChange={(e) => setCardData({ ...cardData, emailRecruiter: e.target.value })}
              name="description" placeholder='Do you have an email?' />

            <br /><label className={form.fontTitle}>Contact</label><br />
            <input type="number"
              className={form.placeHolderBox}
              onChange={(e) => setCardData({ ...cardData, telRecruiter: e.target.value })}
              name="and contact?" />

            <br /><label className={form.fontTitle}>Linkedin</label><br />
            <input type="url"
              className={form.placeHolderBox}
              name="description"
              onChange={(e) => setCardData({ ...cardData, linkedinRecruiter: e.target.value })}
              placeholder="Linkedin?" autoComplete="off" /><br />
          </fieldset>

        </div>
        <div className={form.containerCorrect.interviewINFO}>

          <h3 className={form.fontDisplay}>Interview</h3>

          <label className={form.fontTitle}>Location</label>
          <input type="text"
            className={form.placeHolderBox} 
            autoComplete="off"
            onChange={(e) => setCardData({ ...cardData, appointmentLocation: e.target.value })}
            placeholder='Address'></input><br />

          <label className={form.fontTitle}>Next Interview</label>
          <input type="datetime-local"
            className={form.placeHolderBox}
            onChange={(e) => setCardData({ ...cardData, appointmentData: e.target.value })}
            name="description" min="19/05/2022" /><br />

          <label className={form.fontTitle}>Last interview</label>
          <input type="datetime-local"
            className={form.placeHolderBox}
            onChange={(e) => setCardData({ ...cardData, lastAppointment: e.target.value })}
            name="description" />

          <br />


        </div>
        <div>
         <label className={form.fontDisplay}>Additional Info</label><br />
          <input type="text"
            className={form.placeholder2}
            name="description"
            onChange={(e) => setCardData({ ...cardData, appoimentInformation: e.target.value })}
            placeholder="Observations" autoComplete="off" /><br /> 
        </div>
        
    </div>

  <span>
    <br /><br /><input className={styles.button1} type="submit"></input>
    <input className={styles.button1} type="reset"></input>
    
    
  </span>
  </form>


  <button 
  className={styles.buttonBack}
  onClick={(e) => {
    e.stopPropagation()
    props.setViewCard(false)
    }}>VOLTA PARA TRÁS</button>
</span>
<span>

</span>
{/* AO CLICAR NO BOTAO EDITAR (CHAVE INGLESA), ELE PASSA A FAZER DISPLAY DE INPUTS/LABELS PASSIVEIS DE ALTERAÇAO */}

</div>


          )}>Go back</button>
          
        </span>
        
        </form>
        
      </span>
      <span>

      </span>


    </div>
  </>
  )
}