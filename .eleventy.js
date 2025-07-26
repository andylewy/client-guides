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

  // ✅ Passthrough copy (if you have other folders you need)
  eleventyConfig.addPassthroughCopy("content/admin");

  // ✅ Return config object
  return {
    dir: {
      input: "content",
      output: "docs",
      includes: "../_includes" // allow includes from _includes/
    },
    markdownTemplateEngine: "njk"
  };
};
