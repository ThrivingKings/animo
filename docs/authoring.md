# Authoring
The core of Animo provides you with an efficient way to structure nearly any type of animation. The ideology behind Animo is breaking large animations into many small iterations, using a transition to preform each step. For instance, considering the [countdown package](https://github.com/ThrivingKings/animo/tree/master/packages/countdown), this comes in very handy when wishing to perform something along the lines of "every second, shrink the progress bar by X percent".

Animo lets you specify a total number of iterations and keeps an eye on your transitions and animations, notifying you when each has completed. One caveat with that, is each iteration expects a transition. If one is not provided, Animo will have nothing to listen for and will not progress.

### Install
```
❯ yarn add animo-core
```

### Taking advantage of promises
When structuring your plugin always remember to return a new instance of Animo.

```js
import animo from 'animo-core'

const myPlugin = (el, options) => {
  return new animo(el, options)
}
```

Allowing your plugin to be used to its full potential.

```js
myPlugin(document.querySelector('.my-element'))
  .then(() => {
    /* ...  */
  })
  .catch(err => {
    /* ... */
  })
```

### Using default properties and a state
Not every plugin will require the maintaining of a state but it is always a good idea to define a set of default properties that will be overwritten by options. This clear and concise approach prevents any confusing when using your plugin.

```js
const myPlugin = (el, options) => {

  const defaultProps = {
    interval: 1000,
    iterate: 5
  }

  const props = { ...defaultProps, ...options }

  /* ... */
}
```

### Core functionality

Following the recommendation above, Animo provides an object of default properties that will be overwritten by the options you provide.

```json
{
  iterate: 1,
  isAnimation: false,
  onComplete: () => {},
  onIteration: () => {},
  onMount: () => {}
}
```

  * ```iterate: number```

  Plain and simply, the number of times to loop before resolving.

  * ```isAnimation: bool```

  If true, performs a single iteration and listens for the completion of a CSS animation.

  * ```onComplete: function```

  Returns an Animo infused element when the last transition of the last iteration has completed (or the initial animation has completed when isAnimation: true)

  * ```onIteration: function```

  Returns an Animo infused element when the transition of the previous iteration has completed

  * ```onMount: function```

  Returns an Animo infused element before the first iteration or animation takes place

### Animo infused elements
Along the way, Animo returns the currently-in-use element (along with some helper functions) to make transformations easier to manage.

The following four helper functions are returned, along with the raw element, in the callback of each of the core Animo functions.

```js
{
  css: stylesObject => {},
  reset: () => {},
  transform: styleString => {},
  transition: styleString => {}
}
```

Calling these will allow you to easily adjust the styling of the element you're manipulating.

```js
onComplete: function(element) {
  if (!props.keep) {
    element.reset()
  }
},
onIteration: function(element) {
  state.currentDeg = state.currentDeg + deg
  element.transform(`rotate(${state.currentDeg}deg)`)
  element.transition(`transform ${interval}ms ${timing}`)
}
```
