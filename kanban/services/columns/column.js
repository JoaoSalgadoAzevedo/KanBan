import { findCardsByState } from '../../data/columns'

export async function getCards(column){
    return await findCardsByState(column)
}