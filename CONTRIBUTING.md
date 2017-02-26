# Contributing
- Keep contributions to the animo-core separate from new packages
- Use the tools that have been made available to you (Babel, Webpack, etc)
- Test your work and include tests when applicable
- All pull requests must be accompanied by a motive, a solution, and an improvement

Also, keep in mind that any new packages will need to be released and maintained from this repository and npm account.

# Developing
## Getting started
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

## Establishing your package
All plugins should live in the `packages` subdirectory and should follow this simple structure:
```
- funkyjazzpackage/
-- src/
--- tests/
--- index.js
-- package.json
-- README.md
```
Then, add your package to the webpack build process
```
entry: {
  animo: "./packages/animo/src/",
  funkyjazzpackage: "./packages/funkyjazzpackage/src/",
  /* ... */
}
```

## Package browser
Now that you've established your package, the easiest way to fine-tune is via the package browser. The package browser is a quick and easy way to demo animo packages in a browser.

Simply add a reference to your package in the `browser/examples` directory, with an array of demos. Make sure the name matches the entry point you specified when establishing your package.
```
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
```
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

## Testing
As stated above, keep all tests in a `tests` folder within your package's `src`
```
❯ yarn test
```

When adding tests, use the test suite that's currently made available and keep filenames relevant to the function being tested (ie `bouncing.test.js`)

# Contributor Code of Conduct

As contributors and maintainers of this project, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual language or imagery, derogatory comments or personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. Project maintainers who do not follow the Code of Conduct may be removed from the project team.

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by opening an issue or contacting one or more of the project maintainers.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.0.0, available at [http://contributor-covenant.org/version/1/0/0/](http://contributor-covenant.org/version/1/0/0/)
