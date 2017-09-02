var gulp = require('gulp');
var del = require('del');
/* SASS */
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
/* REACT */
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var gulp_babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var eventStream = require('event-stream');

gulp.task('clean', function(cb) {
    del(['dist/*','compiled/*'], cb);
});

gulp.task('copy-files', function(){
    return gulp.src(["./source/*.html","./source/js/*"], { base: "./source" })
        .pipe(gulp.dest("./dist"))
});

gulp.task('compile-sass', function () {
    return gulp
        .src(["./source/sass/*.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ["last 3 versions"] }))
        .pipe(gulp.dest("./compiled/css"))
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('build-react', function () {
    return gulp.src(["./source/react/**/*.jsx","./source/react/**/*.js"])
        .pipe(gulp_babel({
            presets: ["env","react"],
            plugins: ["transform-decorators-legacy", "transform-class-properties"]
        }))
        .pipe(gulp.dest("./compiled/js"));
});

gulp.task('bundle-react', function (done) {
    glob('./compiled/js/*.js', function(err, files) {
        if(err){
            done(err);
        }
        var task = files.map(function(file){
            return browserify({
                entries: [file],
                debug: true
            })
                .bundle()
                .on('error', function (error) {
                    console.error("Browserify Error", (error.message));
                })
                .pipe(source(file.split("./compiled/js/")[1]))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./dist/js/react'));
        });
        eventStream.merge(task).on('end',done);
    })
});


gulp.task('default', ['clean', 'copy-files', 'compile-sass', 'build-react', 'bundle-react']);
gulp.watch(["./source/*.html","./source/js/*"],['copy-files']);
gulp.watch("./source/react/**/**/**", ['build-react', 'bundle-react']);
gulp.watch("./source/sass/**/**/**", ['compile-sass']);