var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/app'
  ],
  output: {
    path: __dirname + '/public/js',
    filename: 'app.js',
    publicPath: 'http://localhost:8080/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extentions: [ '', '.js' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot', 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  }
}
