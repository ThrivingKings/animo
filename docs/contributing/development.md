# Development
### Getting started
```
❯ git clone https://github.com/ThrivingKings/animo
❯ cd animo
❯ yarn
```

Then you can either
```
❯ yarn start
```
Or
```
❯ yarn build
```

### Establishing your package
All plugins should live in the `packages` subdirectory and should follow this simple structure:
```
- funkyjazzpackage/
-- src/
--- tests/
--- index.js
-- package.json
-- README.md
```
Then, add your package to the `./build.js` script
```js
const packages = [
  'animate',
  'animo',
  'countdown',
  'rotate',
  'funkyjazzpackage'
]
```

### Package browser
Now that you've established your package, the easiest way to fine-tune is via the package browser. The package browser is a quick and easy way to demo animo packages in a browser.

Simply add a reference to your package in the `browser/examples` directory, with an array of demos. Make sure the name matches the entry point you specified when establishing your package.
```js
export default {
  name: 'funkyjazzpackage',
  demos: [
    {
      title: 'simple funky jazz animation',
      options: {
        classNames: ['animated', 'funkyjazz']
        /* ... */
      }
    }
  ]
}
```
Now run `yarn start` and navigate to `http://localhost:8080`

Additionally, you can specify the styles of the wrapper element as well as the 'demo' box itself
```json
demos: [
  {
    title: 'simple funky jazz animation',
    options: {
      classNames: ['animated', 'funkyjazz']
      /* ... */
    },
    styles: {
      backgroundColor: 'red'
    }
    wrapperStyles: {
      overflow: 'hidden'
    }
  }
]
```

### Testing
As stated above, keep all tests in a `tests` folder within your package's `src`
```
❯ yarn test
```

When adding tests, use the test suite that's currently made available and keep filenames relevant to the function being tested (ie `bouncing.test.js`)
