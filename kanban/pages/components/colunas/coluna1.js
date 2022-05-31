import { useState, useEffect } from "react"
import CardThumbnail from "../cards/CardThumbnail"
import QuickAdd from "../cards/quickAdd"
export default function Coluna1() {

  const [cards_Col1, setCards_Col1] = useState([])
  const [addCard, setAddCard] = useState(false)



  useEffect(() => {
    async function CallBack() {
      const res = await fetch(
        `../../api/columns/column?stateFunnel=Interest&auth=${localStorage.getItem("tokenG3")}`, {
        method: "GET"
      })
      console.log(res)
      const json = await res.json()
      setCards_Col1(json.a)
      console.log("Fim do UseEffect")
    }
    CallBack()
  }, [])


  return (


    <div className='colunas'>
      <h2>Interesse</h2>
      <button 
      onClick={() => setAddCard(addCard ? false : true)}
      className="botaoAdicionar">Add Card</button>
      {addCard && <QuickAdd />}
  
      {
        
        cards_Col1.map(e => < CardThumbnail 
          key={e._id} 
          CardId={e._id} 
          companyName={e.companyName} 
          jobFunction={e.jobFunction}
          creationDate={e.creationDate} /> )
  
  
      }
  
  {/* CardId, companyName, jobFunction, creationDate */}
      {/* <span>{cards_Col1}</span> */}
  
    </div>
  )
}

