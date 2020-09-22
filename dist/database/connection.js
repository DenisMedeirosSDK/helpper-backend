"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
function connection() {
    mongoose_1.default.connect("mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@cluster0.hr2tt.mongodb.net/helpper?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
exports.default = connection;
