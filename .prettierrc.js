// More: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 120, // 行宽度。它不会硬性限制行宽度，比如 Markdown 可配置 proseWrap 允许超出不换行
  tabWidth: 2, // 指定每个缩进的空格数
  useTabs: false, // 是否使用 Tab
  semi: false, // 是否在语句末尾添加分号。（个人更偏向 semicolon-less 风格）
  singleQuote: true, // 是否使用单引号，请注意它能处理好单/双引号同时使用的场景。
  jsxSingleQuote: false, // 作为同上，它在 JSX 中生效，且会忽略 singleQuote
  quoteProps: 'as-needed', // 对象中属性将是否使用引号，as-needed 仅在有必要时才会添加引号，且引号风格基于以上两项配置。比如：{ 'no-var': 2 }
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf'
}
