var gulp = require('gulp');
var less  = require('gulp-less');		//less
var cssmin = require('gulp-cssmin');	//压缩css
var uglify = require('gulp-uglify');	//js压缩
var connect = require("gulp-connect");  //server
var autoprefixer = require('gulp-autoprefixer'); //兼容css浏览器前缀
var ext_replace = require('gulp-ext-replace');	//文件命名
var webserver = require('gulp-webserver'); // 本地服务器

//lDialog.less文件处理后保存到，./dist/css 文件夹下
gulp.task('less', function () {
	return gulp.src('./src/less/*.less')
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
    gulp.watch('./src/js/*.js',['jsmin']);
})

//js压缩
gulp.task('jsmin', function () {
    gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
        .pipe(uglify())
        .pipe(ext_replace('.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

//server服务器
gulp.task('webserver', function() {
  gulp.src( './' ) // 服务器目录（代表根目录）
  .pipe(webserver({
    livereload: true,       // 启用LiveReload，去掉f5刷新的痛点
    host:'192.168.2.230',   // host
    open: true,             // 服务器启动时自动打开网页
    port:'8001'             // 端口
  }));
});

//开始任务
gulp.task('default', function(){
  gulp.start('webserver', 'watch');
});