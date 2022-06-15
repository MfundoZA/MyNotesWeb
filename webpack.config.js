const path = require("path");
module.exports = {
    mode: "production",
    entry: ["./src/js/index.js", "./src/js/create-note.js", "./src/js/create-category.js"],
    output: {
        /*Webpack producing results*/
        path: path.resolve(__dirname, "./public/js"),
        filename: "bundle.js"
    }
}