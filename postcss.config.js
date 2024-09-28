const { plugin } = require("postcss");

module.exports = {
    plugin: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}