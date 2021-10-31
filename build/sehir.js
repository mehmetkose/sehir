"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sehirler = require("./sehirler");

var _sehirler2 = _interopRequireDefault(_sehirler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sehir = function sehir(sorgu) {
  if (sorgu) {
    var sorguSehir = sorgu.toLowerCase();
    var sonuc = _sehirler2.default.filter(function (sehir) {
      return sehir.isimler.includes(sorguSehir) ? sehir : null;
    });
    return sonuc && sonuc.length ? sonuc.pop().isim : sorguSehir;
  }
  return sorgu;
};
exports.default = sehir;