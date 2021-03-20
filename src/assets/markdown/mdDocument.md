### Markdown 文档手册

### 宗旨
- 成为一种适用于网络的书写语言，让文档更容易读、写和随意改。
- [MarkDown中文文档][markDownDocument]
- [MarkDown语法快速上手【集锦】](https://www.jianshu.com/c/65c0f5f216cc)
  
### 兼容 HTML
- HTML 是一种发布的格式，Markdown 是一种书写的格式。
- Markdown 的格式语法只涵盖纯文本可以涵盖的范围。
- 不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
- 目前支持的 HTML 元素有：`<kbd> <b> <i> <em> <sup> <sub> <br>`等
- HTML 区块标签间的 Markdown 格式语法将不会被处理
- HTML 区段标签间的 Markdown 格式语法是有效的。
- `<b>出题标签</b>`
  `<i>斜体标签</i>`
  `<s>删除标签</s>`
  `<a href='www.baidu.com' target='_blank'>百度一下</a>`
  ```markdown
  |属性名|  类型	|默认值 |  说明 |
  |:----|:----:	|----  |----   |
  |title|String	|String|标题文字|
  |extra|String	|String|标题额外|
  
  //显示为下方表格
  ```
  
  |属性名			|类型	|默认值	    |说明	|
  |:----		    |:----:	|----	    |----	|
  |title			|String	|-			|标题文字|
  |extra			|String	|-			|标题额外信息|
  


### 特殊字符自动转换
- 在文档中插入一个版权符号 ©，可以写`&copy` Markdown 会保留它不动。
- 插入 AT&T，Markdown 就会将它转为`AT&amp;T`
- 插入 4 < 5，Markdown 就会将它转为`4 &lt; 5`

### 区块元素

#### 1. 标题
- 类 Setext 形式是用底线的形式，利用 = （最高阶标题）和 - （第二阶标题）
- 任何数量的 = 和 - 都可以有效果。
    ```markdown
    this is an H1
    ======
    this is an H2
    ------
    ```
- 类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶
- 你可以选择性地「闭合」类 atx 样式的标题，这纯粹只是美观用的，行首的井字符数量决定标题的阶数
    ```markdown
    ### this is an H3 ######
    ```


#### 2. 区块引用 Blockquotes
- 语法

  ```markdown
  > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
  >
  > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  >
  > > This is nested blockquote.
  >
  > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.


  > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  id sem consectetuer libero luctus adipiscing.
  ```
- 显示为下方样式
    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
    > 
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > 
    > > This is nested blockquote.
    > 
    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
  
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

#### 3. 列表
- 无序列表使用星号、加号或是减号作为列表标记
- 有序列表则使用数字接着一个英文句点
- 要让列表看起来更漂亮，你可以把内容用固定的缩进整理好
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.


#### 4. 缩进式代码区块
- 缩进式插入前方必须有空行
- 只要简单地缩进 4 个空格或是 1 个制表符就可以
- 一个代码区块会一直持续到没有缩进的那一行（或是文件结尾）。


    function getList() {
        return new Promise((resolve, reject) => {
            setTimeOut(() => {
                resolve()
            }, 1000 * 3)
        )
    }

#### 5. 多行代码区块
```javascript
this.getList().then(res => {
  if(res) {
    console.log('success');
  }
})

```

*代码区块中*，一般的 Markdown 语法不会被转换， 像是 * 便只是星号，
可以很容易地以 Markdown 语法撰写 Markdown 语法相关的文件。

```markdown
*
```

### 分隔线
- 在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。
- 你也可以在星号或是减号中间插入空格。


### 区段元素

#### 1. 链接
- 行内式
  - `[MarkDown入门指南](http://www.jianshu.com/p/1e402922ee32/ 'markdown入门指南')`
- 参考式
  - `[MarkDown中文文档][markDownDocument]`
  - `[markDownDocument]: http://www.appinn.com/markdown/ 'markdown中文文档' `

#### 2. 强调
- 星号（*）和底线（_）作为标记强调字词的符号
- 单个星号（*）或底线（_）转化为em,双个星号（*）或底线（_）转化为strong
- 如果你的 \* 和 _ 两边都有空白的话，它们就只会被当成普通的符号。
  - `*single asterisks*`
  - `_single underscores_`
  - `**double asterisks**`
  - `__double underscores__`

#### 3. 行内代码
- 标记一小段行内代码，你可以用反引号把它包起来（`console.log()`）

#### 4. 图片
- 行内式`![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "图片title")`
- 参考同链接参考式

### 其它

#### 1. 自动链接
- 用方括号包起链接， Markdown 就会自动把它转成a标签的链接。
#### 2. 反斜杠
- 利用反斜杠来插入一些在语法中有其它意义的符号
- 用星号加在文字旁边的方式来做出强调效果（但不用 `` 标签），你可以在星号的前面加上反斜杠
- Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号
  >反斜线、反引号、星号、底线、花括号、方括号、括弧、井字号、加号、减号、英文句点、惊叹号
  
[markDownDocument]: http://www.appinn.com/markdown/ 'markdown中文文档'





