# 一次性纸杯展开图计算
## 1.功能
根据纸杯的高、口宽、底宽，计算纸杯杯壁的展开图的尺寸。
## 2.技术栈
Electron+Js+HtmlElectron+Js+Html
## 3. 项目开发过程
## 3.1 克隆模板项目
```bash
git clone https://github.com/electron/electron-quick-start.git
npm install
```
## 3.2 实现功能
修改<code>index.html,render.js</code>实现展开图计算
## 3.3 本地启动
```bash
npm run start
```
## 3.4 打包发布
打包方式有很多种electron-package,electron-forge,以及本次用到的electron-builder
由于国内网络问题,三种方法都无法正常打包,最终参照[electron-builder打包过程中报错——网络下载篇（转）](https://zhuanlan.zhihu.com/p/483976136)完成打包,主要原理为手动下载zip包到本地指定目录

```bash
# 安装electron-builder 
npm install electron-builder
# 方式一,仅发布
npm run pack
# 方式二,发布安装程序
npm run dist
```
## 参考文档
1. [Electron中文官方文档](https://www.electronjs.org/zh/docs/latest/)