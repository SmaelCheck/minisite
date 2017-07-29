let path = require("path"),
    DIST_DIR = path.resolve(__dirname, "dist"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    SRC_DIR = path.resolve(__dirname, "src"),
    config = {
        entry: SRC_DIR + "/app/index.js",
        output: {
            path: DIST_DIR + "/app",
            filename: "bundle.js",
            publicPath: "/app"
        },
        module: {
            loaders: [{
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                },
                 
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ],
        }
    };

module.exports = config;