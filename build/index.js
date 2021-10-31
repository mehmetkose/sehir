"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sehirler = require("./sehirler");

var _sehirler2 = _interopRequireDefault(_sehirler);

var _sehir = require("./sehir");

var _sehir2 = _interopRequireDefault(_sehir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	sehir: _sehir2.default,
	sehirler: _sehirler2.default
};