module.exports = function () {
  return {
    dir: {
      input: "content",
      output: "dist",
      includes: "../_includes"  // ✅ THIS IS THE FIX
    },
    markdownTemplateEngine: "njk"
  };
};
