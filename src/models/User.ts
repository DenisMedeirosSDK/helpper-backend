import mongoose, { Schema, Document } from 'mongoose'

interface IUser extends Document {
  name: String,
  email: String,
  cpf: String,
  phone: String,
  zipcode: String,
  street: String,
  district: String,
  city: String,
  state: String,
}

const UserSchema:Schema = new Schema({
  name: String,
  email: String,
  cpf: String,
  phone: String,
  zipcode: String,
  street: String,
  district: String,
  city: String,
  state: String,
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User
