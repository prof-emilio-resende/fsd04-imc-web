const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugins = [new MiniCssExtractPlugin()];

const config = {
    entry: "./src/initializers/bootstrap.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        compress: true,
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: {
                    loader: 'babel-loader',
                    options: {},
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    }
}

module.exports = (env, argv) => {
    config.devtool = 'source-map';
    config.mode = argv.mode;
    plugins.push(new HtmlWebpackPlugin({
        hash: true,
        minify: true,
        template: __dirname + "/template.html",
        filename: "index.html"
    }));

    config.plugins = plugins;
    return config;
}
