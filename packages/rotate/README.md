# animo-rotate

> animo rotation.

## Install

```
$ npm install animo-rotate
```

## Usage

```js
import rotate from 'animo-rotate';

rotate(document.querySelector('.some-element'), { deg: 90 })
  .then(function() {
    /* ... */
  })
  .catch(function(err) {
    /* ... */
  })
```

## Options

```js
{
  interval: 1000,
  iterate: 1,
  deg: 180,
  keep: false,
  timing: 'linear'
}
```
