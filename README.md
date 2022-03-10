# Sehir

A function that returns unified Turkish city names. Some cities have multiple names and this component can help you to get the unique name from any city name given. And also helps deal with the classic "I" vs "İ" problem.

## Installation

### NPM

```sh
npm install sehir
```

### YARN

```sh
yarn add sehir
```

## Usage

```js

  import { sehir } from 'sehir';

  sehir("içel") // returns mersin
  sehir("antakya") // returns hatay
  sehir("izmit") // returns kocaeli
  sehir("koCaeli") // returns kocaeli
  sehir("aNTaLyA") // returns antalya


```
