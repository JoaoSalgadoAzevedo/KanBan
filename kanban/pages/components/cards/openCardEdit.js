import { useState } from "react"
export default function OpenCardEdit() {

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
    companyLink: "",
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
        <form onSubmit={(e) => {
          e.preventDefault()
          editCard()
          //AQUI LEVA A FUNCAO DE SUBMIT
        }}>
          {/* <h3>{cardData}</h3> */}
          <label>Observations</label><br />
          <input onChange={(e) => setCardData({ ...cardData, observations: e.target.value })} type="text"></input><br />

          <div className="companyINFO" >

            <fieldset>
              <h3>Informações da empresa</h3>

              <label>Company Name</label><br />
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setCardData({ ...cardData, companyName: e.target.value })}
                placeholder='Company Name'>
              </input><br />

              <label>Company URL</label><br />
              <input type="url"
                onChange={(e) => setCardData({ ...cardData, companyLink: e.target.value })}
                name="description" placeholder="Website"></input><br />

              <label>Company Location</label><br />
              <input type="text" name=""
                onChange={(e) => setCardData({ ...cardData, companyLocation: e.target.value })}
                placeholder='Address'></input><br />
            </fieldset>


          </div>
          <div className="functionDATA" >
            <fieldset>
              <legend>


                <h3>Informações da Função</h3>
              </legend>

              <label>Job Function</label><br />
              <input type="text" autoComplete="off"
                onChange={(e) => setCardData({ ...cardData, jobFunction: e.target.value })}
                placeholder='Working Position'></input>

              <br /><label>Offer Source</label><br />
              <input type="url"
                onChange={(e) => setCardData({ ...cardData, offerSource: e.target.value })}
                name="description" placeholder='Where did you find it?' />

              <br /><label>Offer Link</label><br />
              <input type="url"
                onChange={(e) => setCardData({ ...cardData, offerLink: e.target.value })}
                name="description" placeholder='Keep here the link' />

              <br /><label>Salary Range Between</label>
              <input type="number"
                onChange={(e) => setCardData({ ...cardData, salaryRangeMin: e.target.value })}
                name="salary" min="200" max="5000"  step="25" />
              <label>-</label>
              <input type="number"
                onChange={(e) => setCardData({ ...cardData, salaryRangeMax: e.target.value })}
                name="salary" min="200" max="5000" step="25" />
                <select>
                  
                  <option>Euro   €</option>
                  <option>Dolar    $</option>
                  <option>Cenas ai</option>

                  </select><br />




              <label>Regime:</label>
              <select>


              <option>Presencial
                {/* <input type="radio" id="Presencial"
                  //onChange={(e) => setCardData({ ...cardData, regime: e.target.value })}
                  name="regime" value="presencial"
                  checked ></input> */}
              </option>


              <option >Remote
                {/* <input type="radio" id="remote"
                 // onChange={(e) => setCardData({ ...cardData, regime: e.target.value })}
                  name="regime" value="remote"
                ></input> */}
              </option>

              <option>Hybrid
                {/* <input type="radio" id="hybrid"
                 // onChange={(e) => setCardData({ ...cardData, regime: e.target.value })}
                 name="regime" value="hybrid"
                ></input> */}
              </option>

                </select>


            </fieldset>
          </div>



          <div className="recruiterINFO" >
            <fieldset>
              <h3>Informações do entrevistador</h3>

              <label>Name</label><br />
              <input type="text" autoComplete="off"
                onChange={(e) => setCardData({ ...cardData, nomeRecruiter: e.target.value })}
                placeholder='Person Name'></input><br />

              <label>Email</label><br />
              <input type="email"
                onChange={(e) => setCardData({ ...cardData, emailRecruiter: e.target.value })}
                name="description" placeholder='Do you have an email?' />

              <br /><label>Contact</label><br />
              <input type="number"
                onChange={(e) => setCardData({ ...cardData, telRecruiter: e.target.value })}
                name="and contact?" />

              <br /><label>Linkedin?</label><br />
              <input type="url" name="description"
                onChange={(e) => setCardData({ ...cardData, linkedinRecruiter: e.target.value })}
                placeholder="Linkedin?" autoComplete="off" /><br />
            </fieldset>

          </div>
          <div className="interviewINFO" >

            <h3>Informações da entrevista</h3>

            <label>Location</label>
            <input type="text" autoComplete="off"
              onChange={(e) => setCardData({ ...cardData, appointmentLocation: e.target.value })}
              placeholder='Address'></input><br />

            <label>Next Interview</label>
            <input type="datetime-local"
              onChange={(e) => setCardData({ ...cardData, appointmentData: e.target.value })}
              name="description" min="19/05/2022" />

            <label>Last interview</label>
            <input type="datetime-local"
              onChange={(e) => setCardData({ ...cardData, lastAppointment: e.target.value })}
              name="description" />

            <br /><label>Additional Info</label><br />
            <input type="text" name="description"
              onChange={(e) => setCardData({ ...cardData, appoimentInformation: e.target.value })}
              placeholder="Observations" autoComplete="off" /><br />


          </div>


          <br /><br /><input type="submit"></input>
          <input type="reset"></input>


        </form>
      </span>
      <span>

        AO CLICAR NO BOTAO EDITAR (CHAVE INGLESA), ELE PASSA A FAZER DISPLAY DE INPUTS/LABELS PASSIVEIS DE ALTERAÇAO
      </span>


    </div>
  )
}