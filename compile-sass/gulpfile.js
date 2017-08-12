const gulp   = require('gulp'),
	  sass   = require('gulp-sass'),
autoPrefixer = require('gulp-autoprefixer');

gulp.task('compile-sass',()=>{
	gulp.src('./asset/scss/*.scss')
		.pipe(sass({
			outputStyle: 'expended'/*compressed*/,
			sourceComments: true
		}))
		.pipe(autoPrefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('default',()=>{
	gulp.watch('./asset/scss/*.scss',['compile-sass']);
});