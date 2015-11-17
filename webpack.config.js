module.exports = {
  entry: "./src/components/App/index.js",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/components'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  }
};
