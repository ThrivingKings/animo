# Countdown
[![npm](https://img.shields.io/npm/v/animo-countdown.svg?style=flat-square)](https://www.npmjs.com/package/animo-countdown)
[![npm](https://img.shields.io/npm/dt/animo-countdown.svg?style=flat-square&label=installs)](https://www.npmjs.com/package/animo-countdown)

A really simple expiration meter.

### Install
```
❯ yarn add animo-countdown
```

### Use
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

### Default properties
```json
{
  // Bar fill color
  color: '#ddd',
  // Amount that's already expired
  elapsed: 0,
  // Total before expiration
  total: 60
}
```
