var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');
var prefixer = require('autoprefixer-stylus');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var bower = require('gulp-bower'); // roda bower install por padrão ou algum outro comando do bower pelo gulp    
var wiredep = require('wiredep').stream; // aplica os arquivos do bower diretamente na index.html do sistema
var del = require('del');
var sequence = require('run-sequence');
var notify = require('gulp-notify');
var mainBowerFiles = require('gulp-main-bower-files');

gulp.task('stylus', function() {
    return gulp.src('./_assets/styl/main.styl')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [nib(), prefixer(), jeet(), rupture()],
            compress: true
        }))
        //write('.') para jogar o mapa do css na mesma pasta em que vai ser colocado o css gerado
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'))
    ;
});

gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./_assets/img/sprite/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.styl',
            cssFormat: 'stylus',
            algorithm: 'binary-tree',
            padding: 3,
            cssTemplate: 'stylus.template.mustache',
            cssVarMap: function(sprite) {
                sprite.name = sprite.name
            }
        }));

    spriteData.img.pipe(gulp.dest('./assets/img/'));
    spriteData.css.pipe(gulp.dest('./_assets/styl/_definitions/'));
});

gulp.task('reload', function() {
    gulp.src(['_site/**/*.html', '_site/**/*.css', '_site/**/*.js'])
        .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src('./_assets/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'))
        .on('error', notify.onError({ Title: 'JSHint', message: 'Errors on javascript.' }))
    ;
});

gulp.task('favicon', function() {
    return gulp.src('./_assets/favicon/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./assets/favicon/'));
});

gulp.task('imagemin', ['favicon'], function() {
    return gulp.src('./_assets/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./assets/img/'));
});

gulp.task('watch', function() {
    gulp.watch('./_assets/styl/**/*.styl', ['stylus']);
    gulp.watch('./_assets/img/sprite/*.*', ['sprite']);
    gulp.watch('./_assets/js/**/*.js', ['js']);
    gulp.watch('./_assets/img/**/*.{jpg,png,gif}', ['imagemin']);
    gulp.watch(['_site/**/*.html', '_site/**/*.css', '_site/**/*.js']);
});

gulp.task('clean', function(cb) {
    return del(['_site/', './assets/', 'bower_components/']);
});

gulp.task('bower-install', function() {
    // roda bower install no root
    return bower();
});

gulp.task('bower', ['bower-install'], function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            'overrides': {
                'font-awesome': {
                    'main': [
                      'css/font-awesome.css',
                      'fonts/fontawesome-webfont.eot',
                      'fonts/fontawesome-webfont.woff',
                      'fonts/fontawesome-webfont.woff2',
                      'fonts/fontawesome-webfont.otf',
                      'fonts/fontawesome-webfont.ttf',
                      'fonts/fontawesome-webfont.svg'
                    ]
                },
                'owl.carousel': {
                    'main': [
                        "dist/owl.carousel.js",
                        "dist/assets/owl.carousel.css"
                    ]
                }
            }
        }))
        .pipe(gulp.dest('./assets/libs'));
});

gulp.task('wiredep', function() {
    return gulp.src(['_includes/footer.html', '_includes/head.html'])
        // .pipe(wiredep({
        //   ignorePath: '../_includes'
        // }))
        // .pipe(wiredep({ ignorePath: '../_site' }))
        .pipe(wiredep({ ignorePath: '..' }))
        .pipe(gulp.dest('_includes/'));
});

gulp.task('sequence', function(callback) {
    sequence(
        'bower', 
        ['sprite', 'stylus', 'imagemin', 'js'],
        'wiredep',
        'watch',
        callback
    );
});

gulp.task('default', ['sequence'], function() {});
