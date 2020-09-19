import { Request, Response } from 'express'

import User from '../models/User'

export default {
  async index (request: Request, response: Response) {
    const users = await User.find()

    return response.json(users)
  },
  async create (request: Request, response: Response) {
    const {
      name,
      email,
      cpf,
      phone,
      zipcode,
      street,
      district,
      city,
      state,
     } = request.body

    const user = await User.create({
      name,
      email,
      cpf,
      phone,
      zipcode,
      street,
      district,
      city,
      state,
    })

    return response.status(201).json(user)
  },
  async delete (request: Request, response: Response) {
    const { id } = request.params

    await User.findByIdAndDelete(id)

    return response.status(204).send()
  }
}
