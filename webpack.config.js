module.exports = {
    entry: "./app/components/Main.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            // the 'transform-runtime' plugin tells babel to require the runtime
            // instead of inlining it.
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};