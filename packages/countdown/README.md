# animo-countdown

> animo countdown bar.

## Install

```
$ npm install animo-countdown
```

## Usage

```js
import countdown from 'animo-countdown';

countdown(document.querySelector('.some-element'), { total: 90 })
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
  color: '#ddd',
  elapsed: 0,
  total: 60
}
```
