"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const donations_1 = tslib_1.__importDefault(require("./donations"));
const router = express_1.Router();
router.use('/donations', donations_1.default);
exports.default = router;
