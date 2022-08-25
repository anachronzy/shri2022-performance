const fs = require('fs');
const { minify } = require('html-minifier-terser');

const main = async () => {
  const input = fs.readFileSync('./index-src.html', { encoding: 'utf8' })

  const result = await minify(input, {
    caseSensitive: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
  });

  fs.writeFileSync('./index.html', result, { encoding: 'utf8' });
}

main();
