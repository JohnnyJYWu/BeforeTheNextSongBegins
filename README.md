# 《星穹铁道》知更鸟音乐创作网页活动——「下一首歌开始之前」 存档

## 链接（活动已结束）
- [国内地址](https://act.mihoyo.com/sr/event/e20240509robin-z0ps5s/index.html)
- [外网地址](https://act.hoyoverse.com/sr/event/e20240509robin-z0ps5s/index.html?game_biz=hkrpg_global&hyl_presentation_style=fullscreen&hyl_auth_required=true&hyl_landscape=true&hyl_hide_status_bar=true&utm_source=hoyolab&utm_medium=tool&lang=zh-cn&bbs_theme=light&bbs_theme_device=1)

星穹铁道2.2版本退出的知更鸟音乐DIY网页活动，是一个非常好玩玩的Loop合成器玩法，自由组合各种乐器音色。

留存一下网页，以及通过浏览器开发者控制台找到了乐器音频源文件，根据网页代码解析将音频文件分割成各种各乐器的音频片段，详见[audiocut](audiocut)目录。

## 分割音频环境配置
python3.9

安装pydub
```sh
pip install pydub
```
安装ffmpeg
```sh
brew install ffmpeg
```

## 分割音频
运行脚本
```sh
cd audiocut
python main.py 使一颗心免于哀伤.ogg 使一颗心免于哀伤.json
```
其中音频文件从活动页请求中可以找到，对应的json文件为每个音频片段的**起始时间**和**持续时长**，在[js代码](code/index_0936fcbbce7021df2525.js)中最后可以找到
```js
		20363: function(t) {
			"use strict";
			t.exports = JSON.parse('{"src":["output.ogg"],"sprite":{"1":[0,9600],"2":[11000,9600],"3":[22000,9600],"4":[33000,9600],"5":[44000,9600],"6":[55000,9600],"7":[66000,9600],"8":[77000,9600],"9":[88000,9600],"10":[99000,9600],"11":[110000,9600],"12":[121000,9600],"13":[132000,9600],"14":[143000,9600],"15":[154000,9600]}}')
		},
		93434: function(t) {
			"use strict";
			t.exports = JSON.parse('{"src":["output.ogg"],"sprite":{"1":[0,12000],"2":[13000,12000],"3":[26000,12000],"4":[39000,12000],"5":[52000,12000],"6":[65000,12000],"7":[78000,12000],"8":[91000,12000],"9":[104000,12000],"10":[117000,12000],"11":[130000,12000],"12":[143000,12000],"13":[156000,12000],"14":[169000,12000],"15":[182000,12000]}}')
		}
```