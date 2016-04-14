var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
//var imagemin = require('gulp-imagemin')
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');








var inputDir = './src',
  outputDir = './build';
  // 需要操作的文件
var source = {
  styleDir: path.join(inputDir, 'style'),
  styleFileDir: path.join(inputDir, 'style/*.less'),
  scriptDir: path.join(inputDir, 'script'),
  scriptFileDir: path.join(inputDir, 'script/*.js'),
  htmlFileDir: path.join(inputDir, 'html/*.*'),
  imageDir: path.join(inputDir,'images/*.*')
}
//需要输出的文件
var output = {
  cssDir: path.join(outputDir, 'static/css'),
  jsDir: path.join(outputDir, 'static/js'),
  htmlDir: path.join(outputDir, 'static/html'),
  imageDir: path.join(outputDir,'static/images'),

  revCssDir: path.join(outputDir, 'static/rev/css'),
  revJsDir: path.join(outputDir, 'static/rev/js'),
  revImageDir:  path.join(outputDir, 'static/rev/images'),
  revJSONFileDir: path.join(outputDir, 'static/rev/**/*.json'),

  htmlFile: path.join(outputDir, 'static/html/*.html'),
}

//css
gulp.task('css', function () {
  return gulp.src(source.styleFileDir)
    .pipe(less())
    .pipe(minifycss())
    .pipe(gulp.dest(output.cssDir))
});
//html
gulp.task('html', function () {
  return gulp.src(source.htmlFileDir)
    .pipe(gulp.dest(output.htmlDir));
});
//js
gulp.task('js', function () {
  return gulp.src(source.scriptFileDir)
  	.pipe(uglify())
    .pipe(gulp.dest(output.jsDir));
});

gulp.task('images', function () {
  return gulp.src(source.imageDir)
  	/*.pipe(imagemin())*/
    .pipe(gulp.dest(output.imageDir));
});

gulp.task('default', ['css','html','js','images'], function(){
    gulp.run('watch');
});