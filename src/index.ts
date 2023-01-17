import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import  dbClient  from '~/mongodb/connection'

/** Import customs routes */
import { TestRoutes } from './resources/test/test.routes'
import { UsersRoutes } from './resources/users/users.routes'
import { WoodsRoutes } from './resources/woods/woods.routes'

const app = express()

app.use(express.json())

/** For URL encoded bodies (the kind produced by HTTP form POSTs) */
app.use(express.urlencoded({
    extended: true
  }));


app.use(cors())

/** Customs routes */
app.use('/test', TestRoutes)
app.use('/users', UsersRoutes)
app.use('/woods', WoodsRoutes)

/** Homepage */
app.get('/', (req, res) => res.send('🏠'))

/** Close DB connection when serveur shutting down */

const server = app.listen(config.API_PORT, () =>  console.log('Server started !'))

/** Close db connection & server when stoping proccessus */
process.on('SIGINT', async () => {
    console.log("triggered SIGINT")

    await dbClient.close()
    server.close()
    console.log('Server stopped !')
})

/** Close db connection & server when restart */
process.on('SIGUSR2', async () => {
    console.log("triggered uSIGUSR2")

    await dbClient.close();
    server.close();
    console.log(`Server stopped`);
});

process.on('SIGTERM', async () => {
    console.log("triggered SIGTERM")

    await dbClient.close();
    server.close();
    console.log(`Server stopped`);
});

/** Close db connection + server when server crash */
process.on('uncaughtException', async (err) => {
    console.log("triggered uncaughtException")
    console.error(err);
    await dbClient.close();
    server.close();
    console.log(`Server stopped`);
});