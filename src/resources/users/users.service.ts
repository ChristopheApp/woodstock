import {Request, Response} from 'express'
import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { db, close } = dbClient;

export class UsersService {
    
    getAllUsers = async (req:Request, res:Response) => {
        if (await db) {
            const users = await db.then((db:typeof Db)=> db.collection('users').find({}).toArray());
            close();
            res.status(200).json(users)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
    }

    addUser = async (req:Request, res:Response) => {
        if (await db) {
            const user = await db.then((db:typeof Db)=> db.collection('users').insertOne(req.body));
            close();
            res.status(201).json(user.insertedId)
        } else {
            res.status(500).json({message: 'Database not available'})
        }
     }
}