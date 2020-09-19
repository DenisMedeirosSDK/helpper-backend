import express from 'express'
import routes from './routes'
import cors from 'cors'
import connection from './database/connection'

const server = express()

server.use(express.json())
server.use(cors())
connection()

server.use(routes)

server.listen(3333, () => {
  console.log('Server start, port 3333')
})
