"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('Hello, World!');
});
exports.StartRoute = router;
//# sourceMappingURL=start-route.js.map