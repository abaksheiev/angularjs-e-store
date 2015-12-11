grunt.initConfig({
  bower: {
    bower: {
    install: {
      options: {
        targetDir: './bower_components',
        layout: 'byType',
        install: true,
        verbose: false,
        cleanTargetDir: false,
        cleanBowerDir: false,
        bowerOptions: {}
      }
    }
  }
  }
});
grunt.registerTask("bower-install", [ "bower-install-simple" ]);

grunt.loadNpmTasks('grunt-bower-task');