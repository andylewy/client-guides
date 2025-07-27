const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it")();

module.exports = function (eleventyConfig) {
  // Custom Nunjucks Markdown filter for rendering markdown in .njk templates
  eleventyConfig.addNunjucksFilter("markdown", function(content) {
    return markdownIt.render(content);
  });

  // Custom Nunjucks filter to read a file's contents (absolute path from project root)
  eleventyConfig.addNunjucksFilter("readFile", function(filePath) {
    return fs.readFileSync(path.join(__dirname, filePath), "utf-8");
  });

  // ✅ Auto-copy shared Markdown files from content/shared to _includes/shared
  eleventyConfig.on("beforeBuild", () => {
    const srcDir = "content/shared";
    const destDir = "_includes/shared";
    fs.mkdirSync(destDir, { recursive: true });

    if (fs.existsSync(srcDir)) {
      fs.readdirSync(srcDir).forEach(file => {
        const src = path.join(srcDir, file);
        const dest = path.join(destDir, file);
        fs.copyFileSync(src, dest);
      });
    }
  });

  // ✅ Passthrough copy for admin or other static content
  eleventyConfig.addPassthroughCopy("content/admin");

  // ✅ Optional: Watch shared folder for live reload during local development
  eleventyConfig.addWatchTarget("content/shared");

  return {
    dir: {
      input: "content",
      output: "docs",
      includes: "../_includes"
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
