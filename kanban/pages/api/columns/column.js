import {getCards} from "../../../services/columns/column"

export default async function column1 (req, res) { 
    if (req.method === "GET") {
        console.log(req.query)
        let a = await getCards(req.query);
        return res.status(200).json({a})
    }
}
   