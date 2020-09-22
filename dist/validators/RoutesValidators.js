"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var validators = {
    createUser: celebrate_1.celebrate((_a = {},
        _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
            name: celebrate_1.Joi.string().required(),
            email: celebrate_1.Joi.string().required().email(),
            cpf: celebrate_1.Joi.string().required(),
            phone: celebrate_1.Joi.string().required(),
            zipcode: celebrate_1.Joi.string().required(),
            street: celebrate_1.Joi.string().required(),
            district: celebrate_1.Joi.string().required(),
            city: celebrate_1.Joi.string().required(),
            state: celebrate_1.Joi.string().required()
        }),
        _a)),
    deleteUser: celebrate_1.celebrate((_b = {},
        _b[celebrate_1.Segments.PARAMS] = celebrate_1.Joi.object().keys({
            id: celebrate_1.Joi.string().required()
        }),
        _b))
};
exports.default = validators;
