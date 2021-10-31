import { expect } from "chai";

import * as library from "../src/index";

const { sehir, sehirler } = library.default;

describe("test sehir function", () => {
  it("Should return correct city names", () => {
    expect(sehir("antakya")).equals("hatay");
    expect(sehir("Hatay")).equals("hatay");
    expect(sehir("Antalya")).equals("antalya");
    expect(sehir("Afyon")).equals("afyonkarahisar");
    expect(sehir("afyonkarahisar")).equals("afyonkarahisar");
    expect(sehir("izmit")).equals("kocaeli");
    expect(sehir("Istanbul")).equals("istanbul");
    expect(sehir("Adapazarı")).equals("sakarya");
    expect(sehir("dasdsadsa")).equals("dasdsadsa");
  });
});

describe(`check sehirler array`, function () {
  it("counts city names", () => {
    expect(sehirler.length).equals(81);
  });
});
