const path = require('path');

module.exports = {
    entry: './src/index.ts',

    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader", ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.sass'],
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    mode: 'development',

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};