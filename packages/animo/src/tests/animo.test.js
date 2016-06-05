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

  describe('when given an actual element', () => {
    const el = document.createElement('fakeEL')

    describe('when requesting two iterations', () => {
      const options = {
        iterate: 2,
        onComplete: expect.createSpy(),
        onIteration: expect.createSpy()
      }

      const animoIterations = new animo(el, options)
      let animoEl

      beforeEach(done => {
        animoIterations.then(el => {
          animoEl = el
          done()
        })
      })

      it('iterates twice', () => {
        expect(options.onIteration.calls.length).toEqual(2)
      })

      it('completes', () => {
        expect(options.onComplete).toHaveBeenCalled()
      })
    })
  })
})
