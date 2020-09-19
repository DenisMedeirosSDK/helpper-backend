import express from 'express'
import routes from './routes'
import cors from 'cors'
import connection from './database/connection'

const server = express()

server.use(express.json())
server.use(cors({origin: 'https://helpper-fr.herokuapp.com/'}))
connection()

server.use(routes)

server.listen(process.env.PORT ? process.env.PORT : 3333)
