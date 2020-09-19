import mongoose from "mongoose";

function connection() {
  mongoose.connect("mongodb+srv://helpper:drGuYNAIK6vCNoqf@cluster0.hr2tt.mongodb.net/helpper?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connection;
