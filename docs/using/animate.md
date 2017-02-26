# Animate
[![npm](https://img.shields.io/npm/v/animo-animate.svg?style=flat-square)](https://www.npmjs.com/package/animo-animate)
[![npm](https://img.shields.io/npm/dt/animo-animate.svg?style=flat-square&label=installs)](https://www.npmjs.com/package/animo-animate)

The animate plugin assists with triggering CSS animations, along with listening for the complete of said animations.

### Install
```
❯ yarn add animo-animate
```

### Use
```js
import animate from 'animo-animate'
// Or via the script tag if you're not bundling
// <script src="path/to/animate.min.js"></script>

animate(document.querySelector('.some-element'), {
  classNames: ['animated', 'bounce']
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
  // Array of classname(s) that contain animation rules
  classNames: ['animated'],
  // Toggles removing of classname(s) on completion
  keep: false
}
```

One caveat with the animate plugin is that it does not contain a preloaded stylesheet (as the original animo did). It's entirely up to you which animations you use.
