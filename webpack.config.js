const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './examples/index.html',
  filename: './index.html',
})

module.exports = {
  entry: path.join(__dirname, 'examples/index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },

  plugins: [htmlPlugin],
}
