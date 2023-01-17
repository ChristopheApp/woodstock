import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";
require('dotenv').config({path: './.env'});

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB_NAME;

const options: MongoClientOptions = {
    /* useNewUrlParser: true, (longer required)
      useUnifiedTopology: true, (longer required) */
    serverApi: ServerApiVersion.v1,
  };

const client = new MongoClient(uri, options);

const db = client
    .connect()
    .then((conn) => conn && conn.db(dbName))
    .catch((err) => {
        console.log(`Error happened while initializing database client... more details: ${err}`);
        throw err;
    });

const close = () => client.close();

const dbClient = {
    getDb : async () => await db ? await db : undefined,
    close,
};

export default dbClient;