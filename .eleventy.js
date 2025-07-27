const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
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
    markdownTemplateEngine: "njk", // Allows Nunjucks logic in markdown
    dataTemplateEngine: "njk",     // Allows Nunjucks in frontmatter/data files
    htmlTemplateEngine: "njk"      // Allows Nunjucks in HTML templates (optional)
  };
};
