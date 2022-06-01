import { getOneCard } from "../data/db";

export async function getCard(id){
    return await getOneCard(id)
}