const environment = require('./environment')
const merge = require('webpack-merge');

const config = merge.smartStrategy({
})(environment.toWebpackConfig(), {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
});

module.exports = config;
