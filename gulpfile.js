const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const compress_images = require( 'compress-images' );
const run = require( 'gulp-run' );

let styles = () => {
    return gulp.src( 'src/assets/_scss/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( gulp.dest( 'src/assets/' ) );
};

let compressImages = () => {
    compress_images( 'src/assets/_raw_images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', 'src/assets/images/', {
            compress_force: false,
            statistic: true,
            autoupdate: true,
        }, false,
        { jpg: { engine: 'mozjpeg', command: [ '-quality', '60' ] } },
        { png: { engine: 'webp', command:  ['-q', '60'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'giflossy', command: [ '--colors', '64', '--use-col=web' ] } }, function( err, completed ) {
            console.log( 'Completed image compression' );
        } );
};

let jsonToScss = () => {
  return run( 'json-to-scss \'./src/assets/_conf/**/*.json\' ./src/assets/_scss/_variables/', true ).exec()
    .pipe( gulp.dest( 'output' ) );
};

let watch = () => {
    gulp.watch( 'src/assets/_conf/**/*.json', jsonToScss );
    gulp.watch( 'src/assets/_raw_images/**/*.*', compressImages );
    gulp.watch( 'src/assets/_scss/**/*.scss', styles );
};

let build = () => {
    styles();
    compressImages();
    jsonToScss();
}

exports.jsonToScss = jsonToScss;
exports.styles = styles;
exports.compreessImages = compressImages;
exports.watch = watch;
exports.build = build;