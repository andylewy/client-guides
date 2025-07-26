const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it");

module.exports = function () {
  const audiences = ["internal", "external"];
  const md = markdownIt();

  return audiences.map((audience) => {
    const filePath = path.join(__dirname, "raw/article.md");
    const raw = fs.readFileSync(filePath, "utf-8");
    const rendered = nunjucks.renderString(raw, { audience });

    return {
      data: {
        permalink: `${audience}/article/index.html`,
        layout: "base.njk",
        title: `Refund Policy (${audience})`,
        audience,
      },
      render() {
        return md.render(rendered);
      },
    };
  });
};
