import isElement from 'lodash.iselement'

const whichAnimationEvent = () => {
  const el = document.createElement('fakeelement')
  const animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  }

  for (const a in animations) {
    if (el.style[a] !== undefined) {
      return animations[a]
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
      transition: (styleString) => {
        element.style.transition = styleString
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
