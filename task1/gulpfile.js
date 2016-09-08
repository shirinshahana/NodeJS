var gulp = require('gulp');
var beautify = require('gulp-beautify');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');




gulp.task('beautify', function() {
  gulp.src(['./test/*.js'])
    .pipe(beautify({indentSize: 2,"brace_style": "collapse", "indent_with_tabs": true}))
    .pipe(gulp.dest('./test/'))
gulp.src(['./model/*.js'])
    .pipe(beautify({indentSize: 2,"brace_style": "collapse", "indent_with_tabs": true}))
    .pipe(gulp.dest('./model/'))
gulp.src(['./router/*.js'])
    .pipe(beautify({indentSize: 2,"brace_style": "collapse", "indent_with_tabs": true}))
    .pipe(gulp.dest('./router/'))
gulp.src(['./controller/*.js'])
    .pipe(beautify({indentSize: 2,"brace_style": "collapse", "indent_with_tabs": true}))
    .pipe(gulp.dest('./controller/'))
});


gulp.task('default',['beautify','jshint'],function (){
    gulp.src('./test/test.js', {read: false})
        
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('jshint', function () {
    return gulp.src(['./model/*.js','./test/*.js','./router/*.js','./controller/*.js'])
            .pipe(jshint({undef:true, unused:true, curly : true,predef:["MY_GLOBAL"], node:true , asi:true, boss:true,mocha:true}))
            .pipe(jshint.reporter( 'default' ));

});
