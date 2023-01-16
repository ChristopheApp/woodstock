import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import { TestRoutes } from './resources/test/test.routes'

const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
  }));


app.use(cors())

app.use('/test', TestRoutes)
app.get('/', (req, res) => res.send('🏠'))

app.listen(config.API_PORT, () =>  console.log('Server started !'))
