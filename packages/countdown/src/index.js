import animo from '../../animo/src/index'

const countdown = (el, options) => {
  const defaultProps = {
    color: '#ddd',
    elapsed: 0,
    total: 60
  }

  const state = {
    elapsed: 0,
    progressEl: document.createElement('div')
  }

  const props = { ...defaultProps, ...options }
  const { elapsed, total } = props
  state.elapsed = elapsed
  const iterate = total - elapsed

  const percent = elapsed =>
    Math.max(0, 100 - ((elapsed / total) * 100 ))

  return new animo(el, {
    iterate,
    onMount: element => {
      element.raw.appendChild(state.progressEl)
      Object.assign(state.progressEl.style, {
        backgroundColor: props.color,
        height: '100%'
      })
      element.transition('transform 1s linear')
      element.transform(`translate3d(${percent(state.elapsed)}%, 0, 0)`)
    },
    onIteration: element => {
      state.elapsed++
      element.transform(`translate3d(${percent(state.elapsed)}%, 0, 0)`)
    }
  })
}

export default countdown
