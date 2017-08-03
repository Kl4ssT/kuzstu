const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');

const paths = {
  src : './src/',
  dist : './dist/',
  styles : './src/styles/main.scss',
  scripts : './src/scripts/main.js'
};

/*--- TASKS ---*/
gulp.task('pug', () => {
  gulp.src(paths.src + '*.pug')
    .pipe(pug({pretty:true}))
    .on('error', err => console.log('Pug:', err.message))
    .pipe(gulp.dest(paths.dist));
});

/*gulp.task('sass', () => {
  gulp.src(paths.styles)
    .pipe(sass())
    .on('error', err => console.log('Sass:', err.message))
    .pipe(prefixer())
    .pipe(minifyCss())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(paths.dist + 'css/'));;
});*/
gulp.task('sass', () => {
  gulp.src(paths.styles)
    .pipe(sass())
    .on('error', err => console.log('Sass:', err.message))
    .pipe(prefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.dist + 'css/'));;
});

gulp.task('js', () => {
  gulp.src(paths.scripts)
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('build', ['sass']);

gulp.task('watch', () => {
  //gulp.watch([paths.src + '**/*.pug', paths.src + '*.pug'], ['pug']);
  gulp.watch(paths.src + 'styles/**/*.scss', ['sass']);
  //gulp.watch(paths.scripts, ['js']);
});
