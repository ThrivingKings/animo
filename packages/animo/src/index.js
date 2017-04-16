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
    onIteration: () => {},
    onMount: () => {}
  }

  return new Promise ((resolve, reject) => {
    if (!element) {
      return reject('could not find element')
    }

    const originalStyles = { ...element.style }
    const props = Object.freeze({ ...defaultProps, ...options })
    const vendor = whichVendor()
    const animoEl = {
      css: styles => {
        element.setAttribute('style', JSON.stringify(styles))
      },
      reset: () => {
        element.setAttribute('style', JSON.stringify(originalStyles))
      },
      transform: styleString => {
        VENDOR_TRANSFORMS.forEach(transform => {
          element.style[transform] = styleString
        })
      },
      transition: styleString => {
        VENDOR_TRANSITIONS.forEach(transition => {
          element.style[transition] = styleString
        })
      }
    }

    const performOnMount = () => {
      return new Promise ((resolve, reject) => {
        props.onMount({ ...animoEl, raw: element })
        // TODO: actually confirm updates rather than
        // delaying and blindly resolving
        setTimeout(() => {
          resolve()
        }, 1)
      })
    }

    const animationStep = event => {
      element.removeEventListener(vendor.transitionEnd, animationStep)

      if (state.iteration === props.iterate) {
        props.onComplete({ ...animoEl, raw: element })
        setTimeout(() => {
          resolve(element)
        }, 1)
        return
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
        setTimeout(() => {
          resolve(element)
        }, 1)
        return
      })
    }

    performOnMount()
      .then(animationStep)

  })
}

export default animo
