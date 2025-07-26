const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // ✅ Auto-copy shared Markdown files from content to _includes
  eleventyConfig.on('beforeBuild', () => {
    const srcDir = "content/shared";
    const destDir = "_includes/shared";
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      const src = path.join(srcDir, file);
      const dest = path.join(destDir, file);
      fs.copyFileSync(src, dest);
    });
  });

  // ✅ Passthrough copy
  eleventyConfig.addPassthroughCopy("content/admin");

  // ✅ Full config object with Nunjucks for Markdown
  return {
    dir: {
      input: "content",
      output: "docs",
      includes: "../_includes" // point up one level to use _includes/
    },
    markdownTemplateEngine: "njk", // <-- enable Nunjucks in markdown
    dataTemplateEngine: "njk",     // <-- enable Nunjucks in frontmatter
    htmlTemplateEngine: "njk"      // optional: apply Nunjucks to HTML too
  };
};
