# Prettier

Prettier 在两种场景下使用：

> [文件保存时]()：便于我们在保存代码时，就能自动格式化，需要配合 `"editor.formatOnSave": true`。（需安装插件）
> [执行脚本/代码提交时]()：需安装 [prettier](https://www.npmjs.com/package/prettier) 相关依赖。

它本身支持：JavaScript、TypeScript、Flow、JSX、JSON、CSS、SCSS、Less、HTML、Vue、Angular、GraphQL、Markdown、YAML 等语言。因此，前端相关的工具（集）都有很好的支持。同时，借助其提供的插件功能可以支持类似 Java、PHP、Ruby 等语言，社区上也有一些相关的[插件](https://prettier.io/docs/en/plugins.html#official-plugins)。

## 配置文件

通常在**项目根目录下**创建以下两个文件：

```text
Project
  ├── ...
  ├── .prettierrc.js    // Prettier 配置文件（或 JSON、YAML 等配置形式）
  └── .prettierignore   // Prettier 忽略文件
```

在 VS Code 中也可以为插件设置相关配置项，当没有显式指定配置文件时，插件中的配置项将作为后备。相反地，如果存在任何本地配置文件，将不会使用 VS Code 插件的配置。

## VS Code 插件

首先，在 VS Code 中安装 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件，并做相应的配置。

我通常会将 `Prettier` 设置为默认的格式化工具，且保存时自动格式化：

```json5
{
  "editor.formatOnSave": true, // 保存时自动格式化
  "editor.defaultFormatter": "esbenp.prettier-vscode", // 指定默认格式化工具
  
  // 可按语言去单独设置特定的格式化工具
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features" // 按 JavaScript 和 TypeScript 语言功能
  },
  "[css]": {
    "editor.defaultFormatter": "<another formatter>"
  }
}
```

若只为 JavaScript 语言的格式化工具设置为 `Prettier`，可以这样：

```json5
{
  "editor.defaultFormatter": null,
  "[javascript]": {
    "editor.formatOnSave": true, // 只为 JavaScript 保存是自动格式化。
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

若想在特定语言上禁用 `Prettier`，还可以在 `.prettierignore` 忽略文件内指定。

```.gitignore
# Project
/node_modules
/dist

# OS
.DS_Store
.idea

# Ignored suffix
*.log
*.md
*ignore
```


## Usage

```shell
# install
yarn add prettier --dev
```

未完待续...