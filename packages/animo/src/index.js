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

const VENDOR_PREFIXED_LISTENERS = {
  'animation': {
    animationEnd: 'animationend',
    transitionEnd: 'transitionend'
  },
  'OAnimation': {
    animationEnd: 'oAnimationEnd',
    transitionEnd: 'oTransitionEnd'
  },
  'MozAnimation': {
    animationEnd: 'animationend',
    transitionEnd: 'transitionend'
  },
  'WebkitAnimation': {
    animationEnd: 'webkitAnimationEnd',
    transitionEnd: 'webkitTransitionEnd'
  }
}

const whichVendor = () => {
  const el = document.createElement('fakeelement')

  for (const a in VENDOR_PREFIXED_LISTENERS) {
    if (el.style[a] !== undefined) {
      return VENDOR_PREFIXED_LISTENERS[a]
    }

    return VENDOR_PREFIXED_LISTENERS.animation
  }
}

const animo = (element, options = {}) => {
  const state = {
    iteration: 0
  }

  const defaultProps = {
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
    const vendor = whichVendor()
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

    const animationStep = (event) => {
      element.removeEventListener(vendor.transitionEnd, animationStep)

      if (state.iteration === props.iterate) {
        props.onComplete({ ...animoEl, raw: element })
        return resolve(element)
      }

      props.onIteration({ ...animoEl, raw: element })
      element.addEventListener(vendor.transitionEnd, animationStep)
      state.iteration++
    }

    if (!props.isAnimation) {
      element.addEventListener(vendor.transitionEnd, animationStep)
    } else {
      element.addEventListener(vendor.animationEnd, () => {
        props.onComplete({ ...animoEl, raw: element })
        return resolve(element)
      })
    }

    animationStep()
  })
}

module.exports = animo
