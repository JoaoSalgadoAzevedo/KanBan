import {useState} from "react"
export default function Coluna1() {

const [cards_Col1, setcards_Col1] = useState([])

  const fetch = async () => {
    console.log("olá")
    const res = await fetch(
      '../../api/columns/column1', {
        headers: {
        "Content-Type": "application/json",
        "Authenticate": localStorage.getItem("token")
      },
      method: "GET"
    })
    console.log("Adeus")
      const data = await res.json() 
      setcards_Col1(data)
  }

  return (


    <div className='colunas'>
      <h2>Interesse</h2>
      <button className="botaoAdicionar"></button>

      <span>{cards_Col1}</span>

    </div>
  )
}

