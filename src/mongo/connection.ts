import { MongoClient } from "mongodb";

const uri = "mongodb+srv://christophe:christophe@cluster0.i5qy4hx.mongodb.net/?retryWrites=true&w=majority"
const dbName = "woodstock"
const client = new MongoClient(uri);

const db = client.connect()
    .then((conn) => conn && conn.db(dbName))
    .catch((err) => {
        console.log(`Error happened while initializing database client... more details: ${err}`);
        throw err;
    });

const close = () => client.close();

const dbClient = {
    db: db ? await db : undefined,
    close,
};

export default dbClient;