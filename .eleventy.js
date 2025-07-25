module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/shared");

  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: data => data.layout || "layout.njk"
  });

  return {
    dir: {
      input: "content",
      includes: "../", // Allows shared content inclusion
      output: "dist"
    },
    markdownTemplateEngine: "njk"
  };
};
