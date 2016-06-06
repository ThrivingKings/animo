import isElement from 'lodash.iselement'

const VENDOR_TRANSFORMS = [
  'mozTransform',
  'msTransform',
  'oTransform',
  'transform',
  'webkitTransform'
]

const VENDOR_TRANSITIONS = [
  'mozTransition',
  'msTransition',
  'oTransition',
  'transition',
  'webkitTransition'
]

const VENDOR_ANIMATION_LISTENERS = {
  'animation': 'animationend',
  'OAnimation': 'oAnimationEnd',
  'MozAnimation': 'animationend',
  'WebkitAnimation': 'webkitAnimationEnd'
}

const whichAnimationEvent = () => {
  const el = document.createElement('fakeelement')

  for (const a in VENDOR_ANIMATION_LISTENERS) {
    if (el.style[a] !== undefined) {
      return VENDOR_ANIMATION_LISTENERS[a]
    }
  }
}

const animo = (element, options = {}) => {
  const state = {
    interval: null,
    iteration: 0
  }

  const defaultProps = {
    interval: 500,
    iterate: 1,
    isAnimation: false,
    onComplete: () => {},
    onIteration: () => {}
  }

  return new Promise ((resolve, reject) => {
    if (!isElement(element)) {
      return reject('could not find element')
    }

    const originalStyles = element.style
    const props = { ...defaultProps, ...options }
    const animoEl = {
      css: (styles) => {
        Object.assign(element.style, styles)
      },
      reset: () => {
        element.style = originalStyles
      },
      transform: (styleString) => {
        VENDOR_TRANSFORMS.forEach(transform => {
          element.style[transform] = styleString
        })
      },
      transition: (styleString) => {
        VENDOR_TRANSITIONS.forEach(transition => {
          element.style[transition] = styleString
        })
      }
    }

    const animationStep = () => {
      if (state.iteration === props.iterate) {
        state.interval = clearInterval(state.interval)
        state.interval = null

        props.onComplete({ ...animoEl, raw: element })
        return resolve(element)
      }

      props.onIteration({ ...animoEl, raw: element })
      state.iteration++
    }

    animationStep()

    if (!props.isAnimation) {
      state.interval = setInterval(animationStep, props.interval)
    } else {
      element.addEventListener(whichAnimationEvent(), () => {
        props.onComplete({ ...animoEl, raw: element })
        return resolve(element)
      })
    }
  })
}

module.exports = animo
