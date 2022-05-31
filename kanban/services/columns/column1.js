import { findCardsByState } from '../../data/columns'

export async function getCards(){
    return await findCardsByState()
}