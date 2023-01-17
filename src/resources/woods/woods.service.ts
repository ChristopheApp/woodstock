import {Request, Response} from 'express'
import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { db, close } = dbClient;

export class WoodsServices {

    getAllWoods = async (req:Request, res:Response) => {
        if (await db) {
            const woods = await db.then((db:typeof Db)=> db.collection('woods').find({}).toArray());
            res.status(200).json(woods)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }

    addWood = async (req:Request, res:Response) => {
        if (await db) {
            const wood = await db.then((db:typeof Db)=> db.collection('woods').insertOne(req.body));
            res.status(200).json(wood.insertedId)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }
}
