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

module.exports = {
  entry: './src/index.tsx',

  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal,
    'd3-selection': 'd3-selection',
    'd3-shape': 'd3-shape',
    'd3-zoom': 'd3-zoom',
    'dagre-d3': 'dagre-d3',
    'classnames': 'classnames',
    'aws-sdk': 'aws-sdk',
    'react-dom-server': 'react-dom-server',
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
  plugins: [
    new TsconfigPathsPlugin({ configFile: './tsconfig.build.json' }),
  ],
}
