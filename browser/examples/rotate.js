export default {
  name: 'rotate',
  demos: [
    {
      title: 'single full rotation',
      options: {
        iterate: 1,
        deg: 180
      }
    },
    {
      title: 'five full rotations',
      options: {
        iterate: 5,
        deg: 180
      }
    },
    {
      title: 'five hundred full rotations',
      options: {
        interval: 100,
        iterate: 500,
        deg: 180
      }
    }
  ]
}
