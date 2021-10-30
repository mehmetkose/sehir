import assert from "power-assert";

import pkg from "../package.json";

import * as library from "../src/index";

const { sehir, sehirler } = library.default;

describe(`check ${pkg}`, function () {
  it("loads city names without crashing", () => {
    assert.equal(sehir("Antalya"), "antalya");
    assert.equal(sehir("Afyon"), "afyonkarahisar");
    assert.equal(sehir("afyonkarahisar"), "afyonkarahisar");
    assert.equal(sehir("izmit"), "kocaeli");
    assert.equal(sehir("Istanbul"), "istanbul");
    assert.equal(sehir("Adapazarı"), "sakarya");
    assert.equal(sehir("dasdsadsa"), "dasdsadsa");
  });
});

describe(`check sehirler`, function () {
  it("counts city names", () => {
    assert.equal(sehirler.length, 81);
  });
});
