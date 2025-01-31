module.exports = config => {
    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/sass");
    config.addPassthroughCopy("src/fonts");
    config.addPassthroughCopy("src/images");
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'docs'
        }
    };
};