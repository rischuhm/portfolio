export default function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/font": "styles/bootstrap-icons"
  });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/styles/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk"
  };
};
