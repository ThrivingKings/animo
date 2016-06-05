const testWebpackConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['src', 'node_modules']
  },
  cache: true
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'packages/**/src/tests/*.js'
    ],

    exclude: [
    ],
    preprocessors: {
      'packages/**/src/tests/*.js': ['webpack']
    },
    webpack: testWebpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox'],
    singleRun: false
  })
}
