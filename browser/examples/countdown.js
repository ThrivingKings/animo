const wrapperStyles = {
  background: '#32D2C0',
  overflow: 'hidden'
}

const styles = {
  width: '100%'
}

export default {
  name: 'countdown',
  demos: [
    {
      title: '1 minute countdown',
      options: {
        total: 60
      },
      styles,
      wrapperStyles
    },
    {
      title: '1 minute countdown with 30 seconds remaining',
      options: {
        total: 60,
        elapsed: 30
      },
      styles,
      wrapperStyles
    }
  ]
}
