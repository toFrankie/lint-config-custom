// More: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100, // 行宽度。它不会硬性限制行宽度，比如 Markdown 可配置 proseWrap 允许超出不换行。
  tabWidth: 2, // 指定每个缩进的空格数。
  useTabs: false, // 是否使用 Tab 缩进。
  semi: false, // 是否在语句末尾添加分号（个人更偏向 semicolon-less 风格）。
  singleQuote: true, // 是否使用单引号（请注意它能处理好单/双引号同时使用的场景）。
  jsxSingleQuote: false, // 作为同上，它仅在 JSX 中生效，且会不受 singleQuote 影响。
  quoteProps: 'as-needed', // 对象中属性将是否使用引号，as-needed 仅在有必要时才会添加引号，且引号风格基于以上两项配置。比如：{ 'no-var': 2 }。
  trailingComma: 'es5', // 对象、数组多行展示时，是否添加尾随逗号。个人认为 es5 是对 git diff 更友好。
  bracketSpacing: true, // 对象字面量中括号内是否有空格。
  bracketSameLine: false, // HTML 元素的 `>` 是否放在最后一行的末尾（此前 jsxBracketSameLine 自 v2.4.0 起已废弃）。
  arrowParens: 'avoid', // 箭头函数中形参个数为一时是否添加括号。
  rangeStart: 0, // 配合 rangeEnd 使用，可指定格式化文件的某部分，但通常是格式化整个文件，因此选择 0 ~ Infinity 即可，这也是默认配置。
  rangeEnd: Infinity,
  requirePragma: false, // 若设置为 true，仅会格式化文件顶部包含特定声明格式的文件。相比之下，个人认为配置 .pretttierignore 是更好的选择。
  insertPragma: false, // 通常结合 requirePragma 一起使用，详情看：https://prettier.io/docs/en/options.html#insert-pragma。
  proseWrap: 'preserve', // markdown 文件折行处理，preserve 表示按照文件原样折行；always 表示超出 printWidth 时折行显示；never 表示不折行。
  htmlWhitespaceSensitivity: 'css', // 由于 HTML 对空格是敏感的，该配置将会影响块两个元素（块元素或行内元素）之间如何连接的问题，具体看示例：https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
  vueIndentScriptAndStyle: false, // 针对 vue 文件中 <style>、<script> 是否缩进的处理。
  endOfLine: 'lf', // 换行符，主要是因为 Window 和 Linux/Mac 下的换行符不一致，都用 lf 没什么好说的，建议也将 VS Code 配置为 "files.eol": "\n"。
  singleAttributePerLine: false, // 针对 HTML、Vue、JSX 是否强制每行单个属性。
}
