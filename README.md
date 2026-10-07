# hit-webinar.github.io

HIT网络研讨会项目主页。

Source of the HIT Webinar homepage.

## report内容部分规则说明：
* 更新`assets/data.js`中的`reports`变量，在其中按照前期格式添加一个js对象（类似于JSON）；
* 其中，id: 常规活动以routine{no}命名，如routine23。特邀报告以talk{yymmdd}命名，如talk230106；
* 海报有两种方式（二选一）：
  * **自动海报（推荐，2026年10月起试行）**：把讲者照片放进`assets/speaker/`文件夹，命名为`{id}.jpg`，并在`data.js`中添加`photo`字段，如`photo: "talk261023.jpg"`。主页会根据活动信息和照片在浏览器里自动生成海报，无需再上传海报；
  * **上传海报**：将无印版海报（海报头不包含logo字样的通用海报）放进`assets/poster/`文件夹，按照`{id}`.`后缀名`命名即可，并在`data.js`中添加`poster`字段。常用图片后缀均可，如`jpeg`、`jpg`、`png`；
* 有`photo`且活动信息完整（标题、嘉宾、主持人、简介、嘉宾简介、会议链接和会议号）时，主页显示自动海报，否则显示`poster`；两者都没有时显示“海报尚未上传”；
* 其他内容请参考内容模版。

## 自动海报
* 海报和直播封面完全由`data.js`中的活动信息加一张讲者照片生成：标题、简介、嘉宾、主持人、时间、腾讯会议号都取自活动对象，二维码由`link.href`生成，论文精读的期数取自id；
* 讲者照片要求：头肩照，至少800×800像素（1000×1000更好），脸部在画面上半部居中（海报取正方形，直播封面取圆形），JPEG，质量约85，小于300 KB；
* 标题可保留开头的`[会议]`标签；需要手动断行时，在`title`里写`\n`；
* 组织者工具：[`poster.html`](https://hit-webinar.com/poster.html)（不在主页链接）。可以选任意一期（键盘←→切换，或`poster.html?id={id}`），并排查看自动海报、直播封面和原始海报，下载JPG（小于1 MB）；也可以拖入一张照片在本机试看效果，照片不会上传；
* 相关代码在`assets/posterkit/`：`poster.js`为绘制逻辑，`art/`为由设计模版（PSD）导出的固定素材，`fonts/`为自托管的思源黑体（Noto Sans SC，SIL OFL 1.1）。所有资源均托管在本站，不依赖Google Fonts或外部CDN，以保证国内可以正常访问。
