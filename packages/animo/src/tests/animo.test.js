import expect from 'expect'
import animo from '../'

describe('animo-core', () => {
  describe('non-existent elements', () => {
    const animoNoEl = new animo(null, {})
    let error

    beforeEach(done => {
      animoNoEl.catch(err => {
        error = err
        done()
      })
    })

    it('rejects', () => {
      expect(error).toEqual('could not find element')
    })
  })

  // TODO: re-add iteration tests with transitions
})
