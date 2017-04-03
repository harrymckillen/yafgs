/*jslint
    white */
/* global
  grunt */
module.exports = function (grunt) {
  'use script';

  var pkg = grunt.file.readJSON('package.json');
  console.log('Buidling Version: '+ pkg.version);

  // Configs
  grunt.initConfig({

    hosts: grunt.file.readJSON('hosts.json'),
    ftp_push: {
      dev: {
        options: {
          authKey: "dev",
          host: '<%= hosts.dev.remoteurl %>',
          dest: '<%= hosts.dev.remotedir %>',
          port: 21,
          debug: false
        },
        files: [
          {expand: true,cwd: 'build',src: ['**/*']}
        ]
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['js/**'], dest: 'build/'}
        ]
      },
      buildzip: {
        files: [
          { src: ['build.'+pkg.version+'.zip'], dest: 'build/' }
        ]
      }
    },
    sass: {
      min: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'build/css/yafgs.min.css': 'src/sass/yafgs.scss'
        }
      },
      max: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'build/css/yafgs.max.css': 'src/sass/yafgs.scss'
        }
      },
      other: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [
          {
            expand: true,
            cwd: 'src/sass',
            src: ['**/*.scss', "!yafgs.scss"],
            dest: 'build/css',
            ext: '.css'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true,
          hostname: 'localhost',
          port: 4000,
          base: 'build/',
          open: true
        }
      }
    },
    jade: {
      build: {
        options: {
          pretty: true,
          data: function() {
            return {
              version: pkg.version
            };
          }
        },
        files: [
          {
            cwd: "src",
            src: ["**/*.jade", "!templates/**/*.jade"],
            dest: "build",
            expand: true,
            ext: ".html"
          }
        ]
      }
    },
    clean: {
      build: {
        src: ['build/']
      }
    },
    watch: {
      files: ['src/**/*'],
      tasks: ['build']
    },
    compress: {
      build: {
        options: {
          archive: 'build.'+pkg.version+'.zip'
        },
        files: [
          {flatten: true, src: ['build/css/*'], filter: 'isFile'} // flattens results to a single level
        ]
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Registered Tasks
  grunt.registerTask('build',
    [
      'clean:build',
      'sass',
      'copy:build',
      'jade:build',
      'compress:build',
      'copy:buildzip'
    ]);
  grunt.registerTask('wipe',
    [
      'clean:build'
    ]);
  grunt.registerTask('default',
    [
      'build'
    ]);
  grunt.registerTask('serve',
    [
      'clean:build',
      'sass',
      'copy:build',
      'jade:build',
      'watch'
    ]);
  grunt.registerTask('ftp',
    [
      'ftp_push:dev'
    ]);
};
