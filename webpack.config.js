const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    https: true,
    host: 'localhost',
    compress: true,
    hot: true,
    port: 3000,
    open: true,
    client: {
      progress: true,
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|svg|jpeg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: false,
          name: 'images/[name]-[hash].[ext]',
        },
      },
    },
    {
      test: /\.(scss|css)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      'src': path.resolve(__dirname, './', 'src'),
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: 'public/index.html'
    }
  )]
}