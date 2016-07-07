import { render } from 'react-dom'
import React from 'react'

// CommonJS/webpack dynamic require
const req = require.context('./examples', true, /^(.*\.(js$))[^.]*$/igm)
const examples = req.keys().map(function(key){
  return req(key).default
})

// Add script for each example
examples.map(example => {
  const { name, examples } = example

  const script = document.createElement('script')
  script.src = `${name}/lib/${name}.min.js`
  document.head.appendChild(script)
})

// An individual demo
const Demo = props => {
  const { demo, name } = props
  const { title, options, styles, wrapperStyles } = demo
  const handleClick = (e) => {
    console.log(`${name}:"${title}" started with ${JSON.stringify(options)}`)
    window[name](e.target, options)
      .then(() => console.log(`${name}:"${title}" completed with ${JSON.stringify(options)}`))
      .catch(() => console.warn(`${name}:"${title}" failed with ${JSON.stringify(options)}`))
  }

  return (
    <div className="demo">
      <h4>{title}</h4>
      <div style={wrapperStyles}>
        <div className="box" style={styles} onClick={handleClick} />
      </div>
    </div>
  )
}

const Examples = ({ examples }) => (
  <div className="examples">
    {examples.map((ex, i) => (
      <div key={i}>
        <h2>{ex.name}</h2>
        <div className="example-bundle">
          {ex.demos.map((demo, i) => <Demo key={i} demo={demo} name={ex.name} />) }
        </div>
      </div>
    ))}
  </div>
)

render(
  <div>
    <h1>Package browser</h1>
    <Examples examples={examples} />
  </div>
, document.querySelector('.example-browser'))
