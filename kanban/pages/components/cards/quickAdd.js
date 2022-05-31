import { useState } from "react"
import styles from "../../../styles/colunas.module.css"
export default function QuickAdd() {
  const [QuickAdd, setQuickAdd] = useState({
    // Card_Id: "_id",
    // User_Id: "_Id",
    stateFunnel: "string",
    creationDate: "data",
    observations: "string",
    companyName: "string",
    companylocation: "string",
    companyLink: "url",
    offerSource: "string",
    jobFunction: "string",
    salaryRangeMin: 0,
    salaryRangeMax: 0,
    offerLink: "url",
    regime: "",
    nomeRecruiter: "string",
    emailRecruiter: "email",
    telRecruiter: 0,
    linkedinRecruiter: "irl",
    companyLink: "url",
    appointmentData: "data",
    appointmentLocation: "string",
    appoimentInformation: "string",
    lastAppointment: "data"
  })


  const submit = async () => {
    console.log("olá")
    const res = await fetch(
      '../../api/cards/createCard', {
      body: JSON.stringify(QuickAdd),
      headers: {
        "Content-Type": "application/json",
        "Authenticate": localStorage.getItem("tokenG3")
      },
      method: "POST"
    })
    console.log("Adeus")
    const json = await res.json()
    console.log(QuickAdd, res.status, json)
  }


  return (
    //TODOS OS INPUTS PRECISAM DE APRESENTAR PLACEHOLDER: CardData.XXXXX
    <div className={styles.popup}>
      <span>
        <form onSubmit={(e) => {
          e.preventDefault(),
            submit()
        }}>


          <div className="companyINFO" >

            <fieldset>
              <h3>Informações da empresa</h3>

              <label>Company Name</label><br />
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setQuickAdd({ ...QuickAdd, companyName: e.target.value })}
                placeholder='Company Name'>
              </input><br />

              <label>Company URL</label><br />
              <input type="url"
                onChange={(e) => setQuickAdd({ ...QuickAdd, companyLink: e.target.value })}
                name="description" placeholder="Website"></input><br />


            </fieldset>


          </div>
          <div className="functionDATA" >
            <fieldset>
              <legend>


                <h3>Informações da Função</h3>
              </legend>

              <label>Job Function</label><br />
              <input type="text" autoComplete="off"
                onChange={(e) => setQuickAdd({ ...QuickAdd, jobFunction: e.target.value })}
                placeholder='Working Position'></input>





              <br /><label>Salary Range Between</label>
              <input type="number"
                onChange={(e) => setQuickAdd({ ...QuickAdd, salaryRangeMin: e.target.value })}
                name="salary" min="200" max="5000" step="25" />
              <label>-</label>
              <input type="number"
                onChange={(e) => setQuickAdd({ ...QuickAdd, salaryRangeMax: e.target.value })}
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

              <label>StateFunnel</label>

              <select>


                <option>Interest

                </option>


                <option >Application Sent

                </option>

                <option>Interview

                </option>
                <option>Awaiting Response

                </option>
                <option>Decision

                </option>

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


              </select>



            </fieldset>
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