import {getCard} from "/../../services/columns/column"
export default async function catchCard (req, res){
    if(req.method === "POST"){
        console.log(req.query.id)
        const id = req.query.id
         let a = await getCard(id)
     
        a ? res.status(200).json(a) : res.status(300).json({message:"Cartão não encontrado"})
    }
}