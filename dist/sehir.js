"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sehirler_1 = __importDefault(require("./sehirler"));
var sehir = function (sorgu) {
    if (sorgu) {
        var sorguSehir_1 = sorgu.toLowerCase();
        var sonuc = sehirler_1.default.filter(function (sehir) {
            return sehir.isimler.includes(sorguSehir_1) ? sehir : null;
        });
        return sonuc && sonuc.length ? sonuc.pop().isim : sorguSehir_1;
    }
    return sorgu;
};
exports.default = sehir;
//# sourceMappingURL=sehir.js.map