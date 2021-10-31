# Sehir

A function that returns unified *Turkish city names*. Some cities has multiple names and this component can helps you to get unique name from any city name given. And also helps dealing with "I" vs "İ" problems.

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
