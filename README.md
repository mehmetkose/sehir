# Sehir

Tekilleştirilmiş şehir bilgisi döndürür. Birden çok ismi olan şehir adlarındaki karmaşayı önler. 

## Kurulum

### Yarn ile

* ```yarn add mehmetkose/sehir```

### Npm ile

* ```npm install sehir```

## Kullanım

```js

  import {sehir} from 'sehir';

  console.log(sehir("aNTaLyA")) // antalya
  console.log(sehir("izmit")) // kocaeli
  console.log(sehir("koCaeli")) // kocaeli

```
