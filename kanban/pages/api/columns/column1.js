import {getCards} from "../../../services/columns/column1"

export default async function column1 (req, res) { 
    if (req.method === "GET") {
        let a = await getCards();
        return res.status(200).json({a})
    }
}
   