// import { getMongoCollection } from "./db";

// export async function insertNota(nota) {
//     const collection = await getMongoCollection('next-example', 'notas')
//     const result = await collection.insertOne(nota)
//     return result.insertedId
// }

// // Filtros
// export async function findNotasByStatus(status, page) {
//     const collection = await getMongoCollection('next-example', 'notas')
//     return await collection.find({
//         status
//     })
//         // .skip(page * 10) // page começa a 0
//         // .limit(10)
//         .toArray()
// }