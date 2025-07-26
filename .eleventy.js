module.exports = function (eleventyConfig) {
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
