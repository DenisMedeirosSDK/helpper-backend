import express from 'express'
import routes from './routes'
import cors from 'cors'
import mongoose from 'mongoose';
// import connection from './database/connection'

const uri = process.env.MONGO_URL
  ? process.env.MONGO_URL
  : 'mongodb+srv://helpper:drGuYNAIK6vCNoqf@cluster0.hr2tt.mongodb.net/helpper?retryWrites=true&w=majority';

const server = express()

server.use(express.json())
server.use(cors({ origin: 'https://helpper-fr.herokuapp.com/' }))

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(routes)

server.listen(process.env.PORT ? process.env.PORT : 3333)
