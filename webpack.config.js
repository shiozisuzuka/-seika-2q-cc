module.exports = {
    watch: true,
		devtool: 'inline-source-map',
		module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    entry: {
        main: './src/index.js',
        app: './src/app.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }  
};
