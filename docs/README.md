<p align="center">
  <img alt="Animo" src="https://raw.githubusercontent.com/ThrivingKings/animo/master/docs/assets/logo.png" width="440">
</p>

<p align="center">
  Animo is a powerful little tool for managing transitions and animations with JavaScript
</p>

---
[![npm](https://img.shields.io/npm/v/animo-core.svg?style=flat-square)](https://www.npmjs.com/package/animo-core)
[![npm](https://img.shields.io/npm/dt/animo-core.svg?style=flat-square&label=installs)](https://www.npmjs.com/package/animo-core)

Animo allows you to easily take control of your animations. Iterate through a massive, multi-step, animation or simply take care of business when everything is done.

```js
import animo from 'animo-core'

const flashAnimation = el => {
  return new animo(el, {
    isAnimation: true,
    onComplete: function(element) {
      el.classList.remove('animated', 'flash')
    },
    onIteration: function(element) {
      el.classList.add('animated','flash')
    }
  })
}
```

Animo also features a small library of plugins. Each made to harness the power of Animo, as well as make your life a little easier.

```js
import rotate from 'animo-rotate';

const myElement = document.querySelector('.some-element')

rotate(myElement, { deg: 90 })
  .then(function() {
    /* ... */
  })
  .catch(function(err) {
    /* ... */
  })
```
