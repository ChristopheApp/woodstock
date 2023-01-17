import dbClient from '../../mongodb/connection';
const {Db} = require('mongodb')

const { getDb, close } = dbClient;

const fetchUsers = async () => {
    if (await getDb()) {
        const users = await getDb().then((db:typeof Db)=> db.collection('users').find({}).toArray());
        close();
        return users;
    }
}


const addUsers = async () => {
    if (await getDb()) {
        const users = await getDb().then((db:typeof Db)=> db.collection('users').insertOne({name:'test'}));
        close();
        return users;
    }
}