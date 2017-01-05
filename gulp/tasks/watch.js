
/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'server'], function() {
  // gulp.watch('src/app/**/*.js', {debounceDelay: 2000}, ['browserify']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('views/**/*.ejs', ['server']);
  gulp.watch(['app.js', 'tools/**/*.js'], ['server']);
});
