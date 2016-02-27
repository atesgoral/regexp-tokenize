[![Travis CI](https://img.shields.io/travis/atesgoral/regexp-tokenize.svg)](https://travis-ci.org/atesgoral/regexp-tokenize)
[![Coverage Status](https://img.shields.io/coveralls/atesgoral/regexp-tokenize.svg)](https://coveralls.io/github/atesgoral/regexp-tokenize?branch=master)
[![NPM Package](https://img.shields.io/npm/v/regexp-tokenize.svg)](https://www.npmjs.com/package/regexp-tokenize)


# regexp-tokenize

RegExp.prototype.exec sugar to preserve callback/promise chains

## Instead of:

```js
var tokens = /(.+)=(.+)/.exec('key1=value1');

if (tokens) {
  console.log('key:', tokens[1], 'value:', tokens[2]);
} else {
  console.error('No match');
}
```

## You can do:

### (a) Callback

Get captured tokens as **named arguments** instead of dealing with obscure indices:

```js
tokenize(/(.+)=(.+)/, 'key1=value1', function (match, key, value) {
  console.log('key:', key, 'value:', value);
});
```

### (b) Promise

Get captured tokens with a resolved promise:

```js
tokenize(/(.+)=(.+)/, 'key1=value1')
  .then(function (tokens) {
    console.log('key:', tokens[1], 'value:', tokens[2]);
  })
  .catch(function () {
    console.error('Not match');
  });
```

### (c) Promise with token mapping

```js
tokenize(/(.+)=(.+)/, 'key1=value1', { key: 1, value: 2 })
  .then(function (pair) {
    console.log('key:', pair.key, 'value:', pair.value);
  })
  .catch(function () {
    console.error('Not match');
  });
```

## Usage

```sh
npm install --save regexp-tokenize
```

```js
var tokenize = require('regexp-tokenize');

tokenize(/.../, '...')
```
