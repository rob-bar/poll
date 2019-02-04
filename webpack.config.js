path = require('path');

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: path.join(process.cwd(), './babelrc')
        }
      }
    }
  ]
}
target: 'node'
