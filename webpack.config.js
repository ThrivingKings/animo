module.exports = {
  entry: {
    animo: "./packages/animo/src/",
    animate: "./packages/animate/src/",
    rotate: "./packages/rotate/src/"
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
