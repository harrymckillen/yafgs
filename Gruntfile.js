/*jslint
    white */
/* global
  grunt */
module.exports = function (grunt) {
  'use script';

  var pkg = grunt.file.readJSON('package.json');
  console.log('Building Version: '+ pkg.version);

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
          {expand: true,cwd: 'build',src: ['**/*', 'releases/.htaccess']}
        ]
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'src/', src: ['js/**', 'releases/.htaccess'], dest: 'build/'}
        ]
      },
      buildzip: {
        files: [
          { src: ['*.zip'], dest: 'build/releases/' }
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
          'build/css/yafgs.full.min.css': 'src/sass/yafgs.full.scss',
          'build/css/yafgs.12.min.css': 'src/sass/yafgs.12.scss',
          'build/css/yafgs.16.min.css': 'src/sass/yafgs.16.scss',
          'build/css/yafgs.pc.min.css': 'src/sass/yafgs.pc.scss'
        }
      },
      max: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'build/css/yafgs.full.max.css': 'src/sass/yafgs.full.scss',
          'build/css/yafgs.12.max.css': 'src/sass/yafgs.12.scss',
          'build/css/yafgs.16.max.css': 'src/sass/yafgs.16.scss',
          'build/css/yafgs.pc.max.css': 'src/sass/yafgs.pc.scss'
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
            src: ['**/*.scss', "!yafgs.**.scss"],
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
    pug: {
      build: {
        options: {
          pretty: false,
          data: function() {
            return {
              version: pkg.version,
              sitetitle: 'Yet Another Feckin\' Grid System'
            };
          }
        },
        files: [
          {
            cwd: "src",
            src: ["**/*.pug", "!templates/**/*.pug"],
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
      tasks: ['serve']
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
  grunt.loadNpmTasks('grunt-contrib-pug');

  // Registered Tasks
  grunt.registerTask('build',
    [
      'clean:build',
      'sass',
      'copy:build',
      'pug:build',
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
      'copy:buildzip',
      'pug:build',
      'watch'
    ]);
  grunt.registerTask('ftp',
    [
      'ftp_push:dev'
    ]);
};
