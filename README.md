# regexp-tokenize

RegExp.prototype.exec sugar.

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
