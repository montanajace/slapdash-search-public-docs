"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firstPage_1 = __importDefault(require("./pages/firstPage"));
const secondPage_1 = __importDefault(require("./pages/secondPage"));
const thirdPage_1 = __importDefault(require("./pages/thirdPage"));
const NODE_ENV = process.env.NODE_ENV || "production";
const app = (0, express_1.default)();
const PORT = NODE_ENV === "development" ? 3000 : 443;
app.get("/", (req, res) => {
    res.setHeader("Allow-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.query.article)
        return res.send((0, thirdPage_1.default)(req.query.article));
    if (req.query.keywords) {
        return (0, secondPage_1.default)(req.query.keywords).then((response) => res.send(response));
    }
    if (!req.query.keywords)
        return res.send((0, firstPage_1.default)());
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
