const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.tsx',
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          },
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
            publicPath: "../",
            name: "[path][name].[ext]",
            context: path.resolve(__dirname, "src/assets"),
            emitFile: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({baseUrl: './'}),]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: ASSET_PATH,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'URL substitutor',
        template: "./src/index.html",
        minify: true
      }),
    new CopyPlugin({
      patterns: [
        { from: "assets/manifest.json", to: "manifest.json" },
        { from: "assets/extLogo.png", to: "extLogo.png" },
      ],
    }),
  ],
  optimization: {
   minimize: true
  },
};