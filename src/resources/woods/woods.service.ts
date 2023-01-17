import {Request, Response} from 'express'
import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { getDb, close } = dbClient;

export class WoodsServices {

    getAllWoods = async (req:Request, res:Response) => {
        if (await getDb()) {
            const woods = await getDb().then((db:typeof Db)=> db.collection('woods').find({}).toArray());
            close();
            res.status(200).json(woods)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }

    addWood = async (req:Request, res:Response) => {
        if (await getDb()) {
            const wood = await getDb().then((db:typeof Db)=> db.collection('woods').insertOne(req.body));
            close();
            res.status(201).json(wood.insertedId)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }
}
