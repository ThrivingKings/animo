import animo from '../../animo/src/index'

const rotate = (el, options) => {
  const defaultProps = {
    interval: 1000,
    iterate: 1,
    deg: 180,
    keep: false,
    timing: 'linear'
  }

  const state = {
    currentDeg: 0
  }

  const props = { ...defaultProps, ...options }
  const { deg, interval, iterate, timing } = props

  return new animo(el, {
    iterate,
    onComplete: function(element) {
      if (!props.keep) {
        element.reset()
      }
    },
    onMount: function(element) {
      element.transition(`transform ${interval}ms ${timing}`)
    },
    onIteration: function(element) {
      state.currentDeg = state.currentDeg + deg
      element.transform(`rotate(${state.currentDeg}deg)`)
    }
  })
}

export default rotate
