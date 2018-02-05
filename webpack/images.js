// // const images = require('image-webpack-loader');
// const images = require('file-loader');

// module.exports = function () {
//     return {
//         module: {
//             rules: [
//                 {
//                     test: /\.(gif|png|jpeg|svg)$/i,
//                     use: [
//                         'file-loader',
//                         {
//                             loader: 'image-webpack-loader',
//                             options: {
//                                 //Compress JPEG images
//                                 mozjpeg: {
//                                     progressive: true,
//                                     quality: 65
//                                 },
//                                 // optipng.enabled: false will disable optipng
//                                 // Compress PNG images
//                                 optipng: {
//                                     enabled: false,
//                                 },
//                                 //Compress PNG images
//                                 pngquant: {
//                                     //Compress SVG images
//                                     quality: '65-90',
//                                     speed: 4
//                                 },
//                                 //Compress GIF images
//                                 gifsicle: {
//                                     interlaced: false,
//                                 },
//                                 // the webp option will enable WEBP
//                                 //Compress JPG & PNG images into WEBP
//                                 webp: {
//                                     quality: 75,
//                                     // optimizer: false,
//
//                                 },
//                                 name: 'images/[name].[ext]'
//                             }
//                         },
//                     ],
//                 },
//             ],
//         },
//     };
// };


module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
            ],
        },
    };
};