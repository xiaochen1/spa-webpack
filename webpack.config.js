const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      },{
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[name]_[local]-[hash:base64:5]"          
        }
      }]
    }]
  },

  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
  ],


}