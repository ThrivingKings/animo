'use strict';

const rimraf = require('rimraf');
const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

const packages = [
  'animate',
  'animo',
  'countdown',
  'rotate'
];

console.info('building');
packages.forEach(pkg => {
  rimraf(`./packages/${pkg}/lib`, () => {
    rollup({
      entry: `./packages/${pkg}/src/index.js`,
      plugins: [
        babel({
          exclude: 'node_modules/**',
          presets: ['es2015-rollup', 'stage-0'],
          plugins: []
        })
      ]
    }).then(transpile => {
      console.info(`writing transpiled package: ${pkg}`);
      transpile.write({
        format: 'es',
        moduleName: pkg,
        dest: `./packages/${pkg}/lib/index.js`
      });
      bundle(pkg);
    }).catch(err => {
      console.warn(err);
      process.exit(1);
    });
  });

  const bundle = pkg => {
    rimraf(`./packages/${pkg}/dist`, () => {
      rollup({
        entry: `./packages/${pkg}/src/index.js`,
        plugins: [
          babel({
            exclude: 'node_modules/**',
            externalHelpers: false,
            runtimeHelpers: true,
            presets: [
              'es2015-rollup',
              'stage-0'
            ],
            plugins: ['transform-runtime']
          }),
          commonjs(),
          resolve({ jsnext: true, main: true }),
          uglify()
        ]
      }).then(bundle => {
        console.info(`writing bundled package: ${pkg}`);
        bundle.write({
          format: 'iife',
          moduleName: pkg,
          dest: `./packages/${pkg}/dist/index.js`
        });
      }).catch(err => {
        console.warn(err);
        process.exit(1);
      })
    });
  }
});
