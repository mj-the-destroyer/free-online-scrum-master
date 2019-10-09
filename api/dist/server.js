"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const path_1 = tslib_1.__importDefault(require("path"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
const app = express_1.default();
if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
}
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/api', routes_1.default);
if (process.env.UI_DIR) {
    const staticDir = path_1.default.join(__dirname, process.env.UI_DIR);
    app.use(express_1.default.static(staticDir));
    app.get('*', (req, res) => {
        res.sendFile('index.html', { root: staticDir });
    });
}
exports.default = app;
