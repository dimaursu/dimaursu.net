module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/slick-carousel/slick/']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': ['scss/app.scss','slick.scss']
        }
      }
    },

    copy: {
      scripts: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.js',
        dest: 'js'
      },

      maps: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.map',
        dest: 'js'
      }
    },

    uglify: {
      dist: {
        files: {
          'js/modernizr/modernizr.min.js': ['js/modernizr/modernizr.js'],
          'js/turbolinks.min.js': ['js/turbolinks.js']
        }
      }
    },

    concat: {
      js: {
        src: [
          'js/foundation/js/foundation.min.js',
          'js/init-foundation.js',
          'js/slick-carousel/slick/slick.min.js',
          'js/slick-slider.js'
        ],
        dest: 'js/app.js'
        }
    },

    watch: {
      options: {
        livereload: true
      },
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    jshint: {
        beforeconcat: ['js/*.js'],
        afterconcat: ['js/app.js']
    },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['copy', 'uglify', 'concat', 'watch', 'jshint']);

};

