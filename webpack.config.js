const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { test: /.(js|jsx)$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']    
        } 
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    publicPath: '/dist',
    //index: './src/index.html',
    // contentBase: path.resolve(__dirname, './src/'),
     proxy: {
      '/bioDetail': 'http://localhost:3000'
    },
    hot: true
  }
}
