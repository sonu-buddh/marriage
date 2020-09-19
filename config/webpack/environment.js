
const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

// module: {
//     loaders: [
//         // ...other loaders...
//         {
//             test: /Dexie.js$/,
//             include: /node_modules\/dexie/,
//             loader: StringReplacePlugin.replace({ // from the 'string-replace-webpack-plugin'
//                 replacements: [{
//                     pattern: /define\.amd/ig,
//                     replacement: function (match, p1, offset, string) {
//                         return false;
//                     }
//                 }]
//             })
//         }
//     ]
// }

environment.plugins.append('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
    })
)


module.exports = environment

