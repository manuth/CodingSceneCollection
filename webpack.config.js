const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/main",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "TrackInformation.js",
        path: path.resolve(__dirname, "lib")
    }
};
