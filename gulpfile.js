const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const watch = require('gulp-watch');

//当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

//ts
var ts = require('gulp-typescript');
var tsProject = ts.createProject({
    declaration: true,
});



//ts->es5
gulp.task('ts->es5', (callback) => {
    gulp.src('./ts/**/*.ts')
        .pipe(
            plumber({
                errorHandler: notify.onError('Error: <%= error.message %>'),
            })
        )
        .pipe(sourcemaps.init())
        .pipe(
            ts({
                noImplicitAny: true,
                //outFile: 'output.js'
            })
        )
        //.pipe(gulp.dest('built/local'))
        // .pipe(babel({
        //     presets: ['es2015'],
        //     plugins: ["transform-es2015-modules-umd"]
        // }))
        //  .pipe(uglify())  //压缩
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./es5'));

    reload();
    callback();
});

// //输出json文件end

//本地服务器
gulp.task('browser-sync', function (callback) {
    browserSync({
        server: './', //服务器地址
    });
    callback();
});

//代理服务器
// gulp.task('browser-sync', (callback)=>  {
//     browserSync.init({
//         proxy: "http://www.erp17.com/"
//     });
//     callback()
// });

//'fontoutput'
//执行任务
gulp.task(
    'default',
    gulp.series('ts->es5', 'browser-sync', (callback) => {
        //es6->es5文件监控
        watch(
            [
                './ts/',
                //  './es5/'
            ],
            // function () {
                //   gulp.run('bable');
                  gulp.series('ts->es5' )
            // }
        );
        callback();
    })
);
