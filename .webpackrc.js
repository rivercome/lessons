export default {
  'entry': 'src/index.js',
  'disableCSSModules': true,
  'hash': true,
  'env': {
    'development': {
      'extraBabelPlugins': [
        ["import",
        { libraryName: "antd", style: true }],
      ]
    },
    'production': {
      'extraBabelPlugins': [
        ["import",
        { libraryName: "antd", style: true }],
      ],
      publicPath: 'http://qhdjl.cdn.neuqzxy.cn/fe/'
    }
  },
  publicPath: '/'
}
