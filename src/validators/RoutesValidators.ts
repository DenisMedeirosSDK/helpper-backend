import { celebrate, Joi, errors, Segments } from 'celebrate'


const validators = {
  createUser: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      cpf: Joi.string().required(),
      phone: Joi.string().required(),
      zipcode: Joi.string().required(),
      street: Joi.string().required(),
      district: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required()
    })
  }),
  deleteUser: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required()
    })
  })
}


export default validators
