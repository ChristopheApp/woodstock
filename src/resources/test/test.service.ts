import {Request, Response} from 'express'
import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { db, close } = dbClient;

const fetchUsers = async () => {
    if (await db) {
        const users = await db.then((db:typeof Db)=> db.collection('users').find({}).toArray());
        return users;
    }
}


const addUsers = async () => {
    if (await db) {
        const users = await db.then((db:typeof Db)=> db.collection('users').insertOne({name:'test'}));
        close();
        return users;
    }
}

export class TestService {

    testRequest = async (req:Request, res:Response) => {
        res.status(200).json({message: 'test request'})
    }

    testFetchUsers = async (req:Request, res:Response) => {
        const users = await fetchUsers();
        res.status(200).json(users)
    }

}