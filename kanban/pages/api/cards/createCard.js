import { createCardOnBD } from "../../../services/createCard"

export default async function apiCreateCard (req, res) {
    if (req.method === "POST") {
        console.log(req.headers.authenticate)
        return await createCardOnBD(req.headers.authenticate, req.body, res)
    }

}
   