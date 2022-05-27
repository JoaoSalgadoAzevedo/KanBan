export default function openCard() {
   
    const [edit, setEdit] = useState(false)
    
    
    return (
    
      <div>
  
{edit === true 
      ? openCardEdit()
      : openCardView()}
      
  
   
      </div>
    )
  }
  