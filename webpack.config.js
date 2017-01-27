module.exports = {
  entry: './src/www/ts/index',
  output: {
    filename: "/dist/app.js",
    path: '/'
  },
  module:{
    rules: [
      {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
}
