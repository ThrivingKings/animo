module.exports = {
  entry: {
    packageBrowser: "./browser/"
  },
  output: {
    path: __dirname + "/packages",
    filename: "[name]/lib/[name].js",
    library: "[name]",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
