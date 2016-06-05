import animo from 'animo-core'

const animate = (el, options) => {
  const defaultProps = {
    classNames: ['animated'],
    keep: false
  }

  const props = { ...defaultProps, ...options }

  if (!Array.isArray(props.classNames)) {
    props.classNames = [props.classNames]
  }

  return new animo(el, {
    isAnimation: true,
    onComplete: function(element) {
      if (!props.keep) {
        props.classNames.forEach(classname => {
          el.classList.remove(classname)
        })
      }
    },
    onIteration: function(element) {
      props.classNames.forEach(classname => {
        el.classList.add(classname)
      })
    }
  })
}

module.exports = animate
