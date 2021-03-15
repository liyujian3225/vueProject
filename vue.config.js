/* gzip压缩开始 */
const path = require('path');
const webpack = require('webpack');
const productionGzipExtensions = ['js', 'css', 'html'];
const isProduction = process.env.NODE_ENV === 'production';
/* gzip压缩结束 */

module.exports = {
  publicPath: './',    // 公共路径
  productionSourceMap: false,  // 关闭生产环境下map分离文件
  outputDir:'visionserve',
  devServer: {
    port: 8080,
    proxy: {
      '/alicloudapi': {
        target:'http://fund.market.alicloudapi.com',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/alicloudapi': ''
        }
      },
    },
  },
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`
    },
    /* gzip压缩开始 */
    resolve:{
      alias:{
        '@':path.resolve(__dirname, './src'),
        '@i':path.resolve(__dirname, './src/assets'),
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 下面是下载的插件的配置
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
    /* gzip压缩结束 */
  },
  chainWebpack: config => {
    // 移除 prefetch 插件，关闭预加载
    config.plugins.delete('prefetch')
    // 或者   修改它的选项：
    /*config.plugin('prefetch').tap(options => {
        options[0].fileBlacklist = options[0].fileBlacklist || []
        options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
        return options
    })*/
  },
  /* 修改主题色 */
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#00c882',   // 修改主体色
            'link-color': '#00c882',
          },
          javascriptEnabled: true        // 解决less报错问题
        },
      },

      /*postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 192, //换算基数， 默认100  ，可以设置为75这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            selectorBlackList: [],// 要忽略的选择器并保留为px。
            exclude: false, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }*/
    }
  },
  // 解决IE中ant-design-vue  icon字体报错
  transpileDependencies: ['_ant-design-vue@1.6.4@ant-design-vue', 'ant-design-vue'],
};
