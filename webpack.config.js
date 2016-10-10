module.exports = {
    entry: './client/src/index.js',

    output: {
        path: __dirname + '/client/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/client/public/'
    },

    module: {
            loaders: [
                {
                  test: /\.js$/,
                  loaders: ['react-hot', 'babel?' + JSON.stringify({
                      cacheDirectory: true,
                      presets: ['es2015', 'react']
                  })],
                  exclude: /node_modules/
                }
            ]
        }
};
