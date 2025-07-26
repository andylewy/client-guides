const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // ✅ Auto-copy shared content to _includes/shared
  eleventyConfig.on('beforeBuild', () => {
    const srcDir = "content/shared";
    const destDir = "_includes/shared";
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, file);
      fs.copyFileSync(srcPath, destPath);
    });
  });

  // Your existing passthroughs and config...
  eleventyConfig.addPassthroughCopy("content/admin");

  return {
    dir: {
      input: "content",
      output: "docs",
      includes: "../_includes"
    },
    markdownTemplateEngine: "njk"
  };
};
