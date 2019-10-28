import assert from 'power-assert';

import pkg from '../package.json';

import * as src from '../src/';

describe(pkg.name, function() {
  it('loads without crashing', () => {
    assert.equal(src.sehir("Antalya"), "antalya");
    assert.equal(src.sehir("Afyon"), "afyonkarahisar");
    assert.equal(src.sehir("afyonkarahisar"), "afyonkarahisar");
    assert.equal(src.sehir("izmit"), "kocaeli");
    assert.equal(src.sehir("Istanbul"), "istanbul");
    assert.equal(src.sehir("Adapazarı"), "sakarya");
    assert.equal(src.sehir("dasdsadsa"), "dasdsadsa");
  });
});
