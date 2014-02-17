module.exports = (grunt) ->

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		sass:
			styles:
				options:
					style: 'expanded'
				files:
					'styles/main.css': 'styles/main.scss'
					'styles/ie6.css': 'styles/ie6.scss'
		coffee:
			scripts:
				options:
					join: true
				files:
					'scripts/main.js': 'scripts/main.coffee'
		watch:
			styles:
				files: ['styles/*.scss']
				tasks: ['sass']
			scripts:
				files: ['scripts/*.coffee']
				tasks: ['coffee']

	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'

	grunt.registerTask 'default', ['watch']
