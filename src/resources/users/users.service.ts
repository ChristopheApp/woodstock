import {Request, Response} from 'express'
import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { getDb, close } = dbClient;

export class UsersService {
    
    getAllUsers = async (req:Request, res:Response) => {
        if (await getDb()) {
            const users = await getDb().then((db:typeof Db)=> db.collection('users').find({}).toArray());
            close();
            res.status(200).json(users)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }

    addUser = async (req:Request, res:Response) => {
        if (await getDb()) {
            const user = await getDb().then((db:typeof Db)=> db.collection('users').insertOne(req.body));
            close();
            res.status(201).json(user.insertedId)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }
}