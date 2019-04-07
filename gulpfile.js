var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://192.168.1.23:9000",
    token : "650e1a3f764d58b61740a43acc58943dab968759",
    options : {
    }
  }, callback);
});
