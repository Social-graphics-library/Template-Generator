const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/AppSrc.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    "/node_modules/",
                    "/app/",
                    "/tools/",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};