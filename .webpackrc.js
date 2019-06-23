export default {
  'entry': 'src/index.js',
  'disableCSSModules': true,
   "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
      ],
}
