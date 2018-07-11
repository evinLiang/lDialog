var gulp = require('gulp');
var less  = require('gulp-less');		//less
var cssmin = require('gulp-cssmin');	//压缩css
var connect = require("gulp-connect");  //server
var autoprefixer = require('gulp-autoprefixer'); //兼容css浏览器前缀
var ext_replace = require('gulp-ext-replace');	//

//lDialog.less文件处理后保存到，./dist/css 文件夹下
gulp.task('less', function () {
	return gulp.src('./src/less/lDialog.less')
	.pipe(less())
  .pipe(autoprefixer())
	.pipe(gulp.dest('./dist/css/'));

});

//css压缩，先处理执行['less']
gulp.task('cssmin', ["less"], function () {
  gulp.src(['./dist/css/*.css', '!./dist/css/*.min.css'])
    .pipe(cssmin())
    .pipe(ext_replace('.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

//watch监听less有变化，就执行['cssmin']
gulp.task('watch',function(){
    gulp.watch('./src/less/*.less',['cssmin']);
    gulp.watch('./src/js/*.js',['js']);
})

//出来js文件
gulp.task('js',function(){
    gulp.src('./src/js/lDialog.js')
    .pipe(gulp.dest('./dist/js/'));
})

gulp.task('default', function () {
  console.log(1);
});