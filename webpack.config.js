module.exports = {
    target: 'web',
    node: {
        fs: 'empty'
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    devtool: 'cheap-module-source-map'
}
