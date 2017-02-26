# Rotate
[![npm](https://img.shields.io/npm/v/animo-rotate.svg?style=flat-square)](https://www.npmjs.com/package/animo-rotate)
[![npm](https://img.shields.io/npm/dt/animo-rotate.svg?style=flat-square&label=installs)](https://www.npmjs.com/package/animo-rotate)

The rotate plugin does just what you'd expect. Using CSS transform, elements will rotate in whichever direction you'd like and for as long and as quick as you'd like.

### Install
```
❯ yarn add animo-rotate
```

### Use
```js
import rotate from 'animo-rotate'
// Or via the script tag if you're not bundling
// <script src="path/to/rotate.min.js"></script>

rotate(document.querySelector('.some-element'), {
  deg: 90,
  iterate: 2
})
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
  // Milliseconds per rotation iteration
  interval: 1000,
  // Number of times to complete a full rotation
  iterate: 1,
  // Degree of rotation
  deg: 180,
  // Toggles removing of transition on completion
  keep: false,
  // CSS transform timing property
  timing: 'linear'
}
```
