
const { src, dest, watch, parallel } = require("gulp")

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const imagemin = require("gulp-imagemin");


// IMAGES
const webp = require("gulp-webp");
const avif = require("gulp-avif");



function imagenes(done) {

    src("src/img/**/*")
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest("../backend/public/img"));
    
    done();
}

function css(done) {

    src('src/scss/**/*.scss')// identificar el archivo SASS
        .pipe(plumber()) // manejo de errores
        .pipe(sass())  // compilarlo
        .pipe(dest('../backend/public/css'));// Almacenarla en el disco duro


    done(); // Callback que abisa a gulp cuando llegamos al final
}

function webpVersion(done) {

    const options = {
        quality: 50,
    };

    src("src/img/**/*.{png, jpg, webp}")
        .pipe(webp(options))
        .pipe(dest("../backend/public/img"))
    done()
}

function avifVersion(done) {

    const options = {
        quality: 50,
    };

    src("src/img/**/*.{png,JPG,jpg,webp}")
        .pipe(avif(options))
        .pipe(dest("../backend/public/img"))
    done()
}


function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.imagenes = imagenes;
exports.css = css;
exports.webpVersion = webpVersion;
exports.avifVersion = avifVersion;
exports.dev = parallel(dev); // webpVersion, avifVersion,