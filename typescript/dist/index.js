"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var app = express_1.default();
app.get('/', function (request, response) {
    var user = CreateUser_1.default({
        email: 'dsmanhaes@gmail.com',
        password: '123',
        techs: [
            'Node.js',
            'ReactJS',
            {
                title: 'React Native',
                experience: 100
            }
        ]
    });
    return response.json({ user: user });
});
app.listen(3333);
