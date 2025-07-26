const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it")();

const audiences = ["internal", "external"];

module.exports = audiences.map(audience => {
  return {
    permalink: `${audience}/article/index.html`,
    data: {
      layout: "base.njk",
      title: `Article (${audience})`
    },
    render() {
      const raw = fs.readFileSync(path.join(__dirname, "article.md"), "utf-8");
      const renderedMd = nunjucks.renderString(raw, { audience });
      return markdownIt.render(renderedMd);
    }
  };
});
