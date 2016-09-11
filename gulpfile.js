var gulp = require('gulp');
// var less = require('gulp-less');

gulp.task('copy', function() {

  gulp.src('src/index.html').pipe(gulp.dest('dist/'));

});

// gulp.task('dist', function() {

//   gulp.watch('src/index.html',['copy']);

// });

// gulp.task('style', function() {

//   gulp.src('src/style/1.less')
//   .pipe(less())
//   .pipe(gulp.dest('dist/css/'));


// });



// var browserSync = require('browser-sync').create();

// // Static server
// gulp.task('serve', function() {
//     browserSync.init({
//         server: {
//             baseDir: "dist/"
//         }
//     });
// });
