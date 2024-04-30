const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    resolve: {
        fallback: {
            "assert": require.resolve("assert/"),
            "crypto": require.resolve("crypto-browserify")
        }
    },
    plugins: [
        new NodePolyfillPlugin()
    ]
};

