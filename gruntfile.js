module.exports = function (grunt) {
  // Configure grunt 
  grunt.initConfig({
    
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: [
            'assets/js/bootstrap.min.js',
            'assets/js/jquery.bxslider.js'
          ],
      dest: 'assets/js/scripts.js',
    },
  },

  sass: {                              
    dist: {                            
      options: {                       
        style: 'expanded'
      },
      files: {                          
        'assets/css/style.css': 'assets/css/style.scss'
      }
    }
  },

  watch: {        
      all: {
        files: ['assets/css/*.scss',],
        //tasks: ['sass', 'cssmin', 'uglify'],
        //tasks: ['sass', 'cssmin'],
        tasks: ['sass','uglify', 'cssmin'],
      }
  },

  cssmin: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: { 
      files: { 
        'assets/css/all.min.css': ['assets/css/style.css']
      }
    }
  },

  uglify: {
    my_target: {
      files: {
        'assets/js/scripts.min.js': ['assets/js/scripts.js']
      }
    }
  }  

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // TASKS 
  //grunt.registerTask('default', ['watch', 'sass', 'cssmin']);
  grunt.registerTask('default', ['watch', 'sass', 'cssmin', 'uglify']);
  grunt.registerTask('scripts', ['concat']);
}; 