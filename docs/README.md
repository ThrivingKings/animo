<p align="center">
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg width="433px" viewBox="0 0 182 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Group" transform="translate(4.000000, 6.000000)" stroke="#32D2C0" stroke-width="5">
        <polygon id="Triangle-1" points="37.5 0 75 75 0 75"></polygon>
        <path d="M76,0 L76,75" id="Line" stroke-linecap="square"></path>
        <path d="M88,0 L88,75" id="Line-Copy" stroke-linecap="square"></path>
        <path d="M100,0 L100,75" id="Line-Copy-2" stroke-linecap="square"></path>
        <circle id="Oval-1" cx="137.5" cy="37.5" r="37.5"></circle>
      </g>
    </g>
  </svg>
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
