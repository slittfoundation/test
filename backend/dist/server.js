"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
// Global error handler placeholder
app.use((err, _req, res, _next) => {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map