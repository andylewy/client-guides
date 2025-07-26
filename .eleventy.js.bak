module.exports = function (eleventyConfig) {
  // ✅ Copy admin folder to output (needed for Decap CMS)
  eleventyConfig.addPassthroughCopy("content/admin");

  return {
    dir: {
      input: "content",
      output: "dist",
      includes: "../_includes"
    },
    markdownTemplateEngine: "njk"
  };
};
