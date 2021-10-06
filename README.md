# Lint Config Custom

记录平常项目中的规范或习惯（持续维护）

> 包括但不限于 ESLint、Prettier、EditorConfig、CSSComb、PostCSS、Babel、Webpack、VS Code 等工具链的相关配置。

## [EditorConfig](https://editorconfig.org/)

EditorConfig 有助于为跨各种编辑器和 IDE 处理同一项目的多个开发人员维护一致的编码风格。 EditorConfig 文件很容易阅读，并且可以很好地与版本控制系统配合使用。

> 一些 IDE 原生支持 EditorConfig，但是一些 Editor 仍需要配合插件一起使用。比如，在 VS Code 中安装 [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 插件。

## [Visual Studio Code](https://code.visualstudio.com/)

Visual Studio Code 是一个轻量级但功能强大的源代码编辑器，支持 Windows、macOS 和 Linux 平台。它天生支持 JavaScript、TypeScript 和 Node.js 等，并提供了丰富的扩展生态系统。

> 它提供了两种[设置](https://code.visualstudio.com/docs/getstarted/settings)方式：
>
> - [用户]()：对该用户打开的所有工程项目都适用。
> - [工作区]()：针对某个特定的项目做配置。通常在项目的根目录下创建 `.vscode/settings.json` 文件，配置方式与用户设置一致。
>
> **工作区设置会覆盖用户设置**。工作区设置的方式适合针对项目做一些统一的规范化配置，并在开发人员之间共享。
