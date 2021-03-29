## 框架选型

`uni-app`基于[Vue.js](https://vuejs.org/) 开发前端应用的框架，优点是**编写一套代码，可发布到IOS、Android、Web、以及各种小程序、快应用等多个平台**
## 创建项目

### 1.可视化界面
>`创建uni-app`
> 
> 可视化方式建议下载[HBuilderX App开发版](https://download1.dcloud.net.cn/download/HBuilderX.3.1.4.20210305.full.zip)
> 
> 在点击工具栏的文件->新建->项目选择uni-app类型，输入工程名，选择模板，点击创建即可。

>`运行uni-app`
> 
> 微信开发者工具里运行
> 
> ![RUNOOB 图标](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d89fd6f0-4f1a-11eb-97b7-0dc4655d6e68.png "RUNOOB")
> 
> 支付宝小程序开发者工具里运行 
> 
> ![RUNOOB 图标](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/fee90480-4f1a-11eb-bd01-97bc1429a9ff.png "RUNOOB")
> 
> 以及在百度开发者工具里运行、字节跳动开发者工具里运行、360开发工具中导入、快应用联盟工具里运行、华为开发者工具里运行、QQ小程序开发工具里运行

> `发布uni-app`
> 
> 发布为微信小程序：需要申请小程序AppID,参考[微信教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7) 
> 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-微信"，输入小程序名称和appid点击发行即可在 unpackage/dist/build/mp-weixin 生成微信小程序项目代码。
> 
> ![RUNOOB 图标](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b36294f0-4f37-11eb-8a36-ebb87efcf8c0.png "RUNOOB")
> 
> 在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可，详细查看：[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8F%91%E5%B8%83%E4%B8%8A%E7%BA%BF)

### 2. [vue-cli命令行](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)

```shell
#全局安装vue-cli
npm install -g @vue/cli
#//创建uni-app
vue create -p dcloudio/uni-preset-vue my-project
#此时，会提示选择项目模板，初次体验建议选择 hello uni-app 项目模板
#运行、发布uni-app,%PLATFORM% 可取值如下['app-plus', 'h5', 'mp-weixin']等
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```
