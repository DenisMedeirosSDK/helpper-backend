import { Router } from "express";
import UserController from './controllers/UserController'
import validators from './validators/RoutesValidators'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/user', validators.createUser ,UserController.create)
routes.delete('/user/:id', validators.deleteUser ,UserController.delete)

export default routes
