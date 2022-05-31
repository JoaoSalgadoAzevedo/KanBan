export default function CardThumbnail({CardId, companyName, jobFunction, creationDate}) {
  return (
    
    <div>

      <p>{companyName}</p>
      <p>{jobFunction}</p>
      <p>{creationDate}</p>
      <p>{CardId}</p>


    </div>
  )
}
