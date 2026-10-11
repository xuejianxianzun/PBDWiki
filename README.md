![logo](./docs/images/logo128.png)

**Powerful Pixiv Downloader's Wiki**

[https://xuejianxianzun.github.io/PBDWiki](https://xuejianxianzun.github.io/PBDWiki)

## 项目结构

Wiki 的内容保存在 `docs` 目录里，每种语言的内容分别保存，使用语言代码作为文件夹的名字，例如 `zh-cn` 和 `en`。

本 Wiki 使用 [docsify](https://docsify.js.org/) 构建。

开发命令：

```bash
# 安装 docsify-cli
npm i docsify-cli -g

# 启动本地测试服务器
docsify serve docs

# 编译样式
npm run less

# 编译 TypeScript
npm run ts
```

## 语言支持

- 简体中文
- English

现在只有两种语言。如果你使用其他语言，可以使用浏览器或扩展程序的网页翻译功能。也欢迎你把文档翻译成其他语言。

注意：编辑时应该在 template 文件夹里修改，它是构建系统的模板文件夹。
