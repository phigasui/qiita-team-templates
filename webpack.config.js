const glob = require('glob')

const srcDir = './src'

module.exports = {
  entry: Object.fromEntries(glob.sync('**/index.tsx', { cwd: srcDir }).map(key => [key.split('.')[0], [srcDir, key].join('/')])),
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devServer: {
    port: 8889,
  },
}
