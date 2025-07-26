const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // ✅ Auto-copy shared Markdown files from content to _includes
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

  // ✅ Passthrough copy
  eleventyConfig.addPassthroughCopy("content/admin");

  // Optional: watch shared folder for live reload
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
