module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'News API'
        return args
      })
  },
  transpileDependencies: [
    'vuetify',
  ],
}
