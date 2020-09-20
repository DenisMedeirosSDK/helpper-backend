import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()

function connection() {
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hr2tt.mongodb.net/helpper?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connection;
