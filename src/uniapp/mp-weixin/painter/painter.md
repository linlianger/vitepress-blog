#### 使用方法

- 根目录下创建文件夹`wxcomponents`
  > [官方链接](https://gitcode.com/kujiale-mobile/painter/overview "painter官网")

* 在 pages.json 中配置需要用到该组件的页面

```json
{
  "path": "pages/index/index",
  "style": {
    "navigationBarTitleText": "",
    "enablePullDownRefresh": false,
    "navigationStyle": "custom",
    "usingComponents": {
      "painter": "/wxcomponents/painter/painter"
    }
  }
}
```

- 在页面中注册组件

```js
import * as painter from "@/wxcomponents/painter/painter";
// 图片生成成功，可以从 e.detail.path 获取生成的图片路径
```

```html
<painter
  name="待遇确认表"
  :scaleRatio="2"
  :palette="paletteInfo"
  @imgOK="imgOK"
  style="position:fixed;top:-9999rpx"
>
</painter>
```

```js
const paletteInfo = {
	width: '750rpx',
	height: '1200rpx',
	background: '#F6F6F6',
	views: [
        {
			type: 'rect',
			css: [{
				top: `80rpx`
			}]
		}
    ]
    ...
}

async function imgOK(e) {
  imgSrc.value = e.detail.path;
  console.log("imgSrc111", imgSrc.value); // 点击打印出来的内容就可以看见图片了
}
```
