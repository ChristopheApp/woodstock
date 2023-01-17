import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import { TestRoutes } from './resources/test/test.routes'
import { UsersRoutes } from './resources/users/users.routes'
import { WoodsRoutes } from './resources/woods/woods.routes'

const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
  }));


app.use(cors())

app.use('/test', TestRoutes)
app.use('/users', UsersRoutes)
app.use('/woods', WoodsRoutes)

app.get('/', (req, res) => res.send('🏠'))

app.listen(config.API_PORT, () =>  console.log('Server started !'))
