const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
     .options({processCssUrls: false})
    .js('src/js/app.js', 'dist/public/js')
    .sass('src/scss/vendor.scss', 'dist/public/css')
    .sass('src/scss/app.scss', 'dist/public/css');

mix.disableSuccessNotifications();