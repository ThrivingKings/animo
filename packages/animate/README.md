# animo-animate

> animo animation handler.

## Install

```
$ npm install animo-animate
```

## Usage

```js
import animate from 'animo-animate';

animate(document.querySelector('.some-element'), { classNames: ['animated', 'bounce'] })
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
  classNames: ['animated'],
  keep: false
}
```
