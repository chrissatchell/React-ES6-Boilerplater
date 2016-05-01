// ==========================================================================
// Based on Egghead.io React Fundatmentals : Development Environment Setup
// 
// url: https://egghead.io/lessons/react-react-fundamentals-development-environment-setup?series=react-fundamentals
// ==========================================================================
module.exports = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true, // livereload
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
