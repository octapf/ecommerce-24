"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./routes/user.route");
const config_1 = require("./config/config");
class Server extends config_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT') || 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routes());
        this.listen();
    }
    routes() {
        return [new user_route_1.UserRoute().router];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening to port ${this.port}`);
        });
    }
}
try {
    new Server();
}
catch (e) {
    console.log(e);
}
