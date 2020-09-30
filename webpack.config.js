module.exports = {
  mode: 'development',
  entry: './src/script/case01/index.js',
  // entry: './src/script/case02/index.js',
  // entry: './src/script/case03/index.js',
  // entry: './src/script/case04/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bandle.js',
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: __dirname + '/dist/'
  },
  devtool: 'inline-source-map'
}
