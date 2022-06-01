export default function CardThumbnail({ CardId, companyName, jobFunction, creationDate }) {

  // const [open, setOpen] = useState(false)
  //aqui vai ter que ter um state ou route em que tu clicas e abre o cartao sem inputs, so com a informação
  //estilo onClick={}

  //o caminho vai ser, on click no thumbnail => openCard, que abre um popup com a informaçao renderizada da BD e depois onclick no botao edit => o mesmo card com os inputs
  //isto da alteraçao entre edit e view há de ser um state || route; O submit é que terá de certeza um route para redirect para a plataforma, o close tambem há de ter um route;
  return (
    <div>

      <p>{companyName}</p>
      <p>{jobFunction}</p>
      <p>{creationDate}</p>
      <p>{CardId}</p>



    {/* // <div onClick={() => setOpen(open ? false : true)}>

      // <p>{companyName}</p>
      // <p>{jobFunction}</p>
      // <p>{creationDate}</p>

        {open && <OpenCardView />} */}


      </div>
      )
}