module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets/**/*.js")

  return {
    passthroughFileCopy: true,
  }
}
