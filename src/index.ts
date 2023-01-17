import cors from 'cors'
import express from 'express'
import { config } from '~/config'

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

app.listen(config.API_PORT, () =>  console.log('Server started !'))
