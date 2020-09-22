"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var connection_1 = __importDefault(require("./database/connection"));
var server = express_1.default();
server.use(express_1.default.json());
server.use(cors_1.default());
connection_1.default();
server.use(routes_1.default);
server.listen(process.env.PORT ? process.env.PORT : 3333);
