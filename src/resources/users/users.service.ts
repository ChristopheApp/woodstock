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
        }

    }
}