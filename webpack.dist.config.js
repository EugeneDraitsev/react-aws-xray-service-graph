const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')


module.exports = {
  entry: path.join(__dirname, 'src/index.tsx'),
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
        exclude: [
          /node_modules/,
          /examples/,
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new TsconfigPathsPlugin({ configFile: path.join(__dirname, 'tsconfig.build.json') }),
  ],
}
