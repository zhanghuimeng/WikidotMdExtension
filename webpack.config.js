var webpack = require('webpack');
var path = require('path');

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            sinon: path.resolve(__dirname, 'node_modules/sinon/pkg/sinon.js')
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        noParse: []
    }
}