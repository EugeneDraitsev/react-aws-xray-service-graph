const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
}

const d3External = {
  root: 'd3',
  commonjs2: 'd3',
  commonjs: 'd3',
  amd: 'd3',
}

const classnamesExternal = {
  root: 'classnames',
  commonjs2: 'classnames',
  commonjs: 'classnames',
  amd: 'classnames',
}

const awsSdkExternal = {
  root: 'awsSdk',
  commonjs2: 'aws-sdk',
  commonjs: 'aws-sdk',
  amd: 'aws-sdk',
}

module.exports = {
  entry: './src/index.tsx',

  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal,
    'd3': d3External,
    'classnames': classnamesExternal,
    'aws-sdk': awsSdkExternal,
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactAwsXRayServiceMap',
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
        exclude: [
          /node_modules/,
          /examples/,
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: [
          /node_modules/,
          /examples/,
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  plugins: [
    new TsconfigPathsPlugin({ configFile: './tsconfig.build.json' }),
  ],
}
