module.exports = {
  entry: {
    // Package browser
    packageBrowser: "./browser/"
  },
  output: {
    path: __dirname + "/packages",
    filename: "[name]/lib/[name].min.js",
    library: "[name]",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
