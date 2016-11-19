//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: './app',

    preprocessors: {
     'components/**/*.html': ["ng-html2js"],
     'views/**/*.html': ["ng-html2js"]
    },

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/angular-toastr/dist/angular-toastr.tpls.min.js',
      'components/**/*.js',
      'views/**/*.js',
      'components/**/*.html',
      'views/**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    ngHtml2JsPreprocessor: {
     // the name of the Angular module to create
     stripPrefix: 'app/',
     moduleName: "myApp.templates"
    }

  });
};
