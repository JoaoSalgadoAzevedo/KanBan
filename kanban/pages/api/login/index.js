export default async function (req, res) {
    if(req.method === "POST") {
        const {email, password} = req.body
        return login(email, password);
    }
}