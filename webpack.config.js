const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './'
  // },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] }
    })
  ]
}

// "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --inline --host 0.0.0.0",
  // plugins: [
  //   new BrowserSyncPlugin({
  //     host: 'localhost',
  //     port: 3000,
  //     server: { baseDir: ['./src'] }
  //   })
  // ]
  // 
  //     // "start": "browser-sync start --server '.' --files '.'"