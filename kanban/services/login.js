export default function login (email, password) {
    const user = await findUserByEmail(email)
    //verificar se o email existe

    if(!user){
        return res.status(404).json({message: "O utilizador não foi encontrado!"})
    }

    if(user.password !== password){
        return res.status(401).json({message: "A password  introduzida é inválida!"})
    }

    const token = await createSession({userId: user.id})
    return res.status(200).json({token: token.insertedId})
}