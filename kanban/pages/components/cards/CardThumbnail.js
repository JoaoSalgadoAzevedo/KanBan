export default function CardThumbnail({ CardId, companyName, jobFunction, creationDate }) {

  // const [open, setOpen] = useState(false)

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