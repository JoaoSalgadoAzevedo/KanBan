import {getCards} from "../../../services/columns/column"

export default async function column1 (req, res) { 
    if (req.method === "GET") {

        let a = await getCards(req.query.stateFunnel , req.query.auth);
        return res.status(200).json({a})
    }
}
   