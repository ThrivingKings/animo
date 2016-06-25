# animo-core

> animo animation core.

## Install

```
$ npm install animo-core
```

## Usage

```js
import animo from 'animo-core';

const flashAnimation = (el) => {
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

## Options

```js
{
  iterate: 1,
  isAnimation: false,
  onComplete: () => {},
  onIteration: () => {},
  onMount: () => {}
}
```
