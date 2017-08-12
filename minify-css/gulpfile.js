const gulp = require('gulp'),
	concat = require('gulp-concat'),
 minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', ()=>{
	gulp.src('./asset/css/*.css')
		.pipe(concat('styles.min.css'))
		.pipe(minifyCSS({
			keepBreaks:false
		}))
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('default', ()=>{
	gulp.watch('./asset/css/*.css', ['minify-css']);
});