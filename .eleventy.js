module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.setBrowserSyncConfig({
    open: true,
    port: 5000,
    ui: {
        port: 5001
    }
  });
};
