"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var RoutesValidators_1 = __importDefault(require("./validators/RoutesValidators"));
var routes = express_1.Router();
routes.get('/users', UserController_1.default.index);
routes.post('/user', RoutesValidators_1.default.createUser, UserController_1.default.create);
routes.delete('/user/:id', RoutesValidators_1.default.deleteUser, UserController_1.default.delete);
exports.default = routes;
