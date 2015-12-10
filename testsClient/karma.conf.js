module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/node_modules/angular/angular.js',
      'app/node_modules/angular-route/angular-route.js',
      'app/node_modules/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],
 

    plugins : [
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
