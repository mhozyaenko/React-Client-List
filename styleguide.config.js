module.exports = {
    webpackConfig: require('./config/webpack.config.dev.js'),
    sections: [{
            name: 'Components',
            components: './src/components/**/*.jsx',
        }, {
            name: 'Containers',
            components: 'src/containers/**/*.jsx',
        }],

}