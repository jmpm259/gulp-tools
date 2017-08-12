const gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('minify-js', ()=>{
	gulp.src('./asset/js/*.js')
		.pipe(concat('plugins.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', ()=>{
	gulp.watch('./asset/js/*.js', ['minify-js']);
});