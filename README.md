# lessons
仿写 https://course.fast.ai/videos/?lesson=1

## 框架
+ dva

## UI库

+ Ant-Design

## 上线部署
+ 没有写配置文件，手动scp上去，然后把index.html里面的文件换成七牛外链

## 文件结构

+ Layout置于components文件夹下
+ 每一个课程文字说明，单独一个文件在routers下，基于抽屉组件（IndexPage.js）
+ 视频播放器引用video.js 在componentDidMount周期中调用，设置视频开始时间
