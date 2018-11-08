"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const start_route_1 = require("./routes/start-route");
class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        console.log('Hello World');
        this.app.use('/', start_route_1.StartRoute);
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}/`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map