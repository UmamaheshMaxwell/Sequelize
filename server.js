var Sequelize = require('sequelize')
	, config    = require('./config')
	, sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
		host: config.host,
		port: config.port,
		logging: false
	})
	, Project   = sequelize.import(__dirname + "/Project")
	, Task      = sequelize.import(__dirname + "/Task")
	
Project.hasMany(Task);
Task.belongsTo(Project);
		
							sequelize.sync({force: true}).then(function() {
								Project.create({ 
									name: 'Sequelize', 
									description: 'A nice MySQL ORM for NodeJS'
								}).then(function(project) {
										console.log("Created project successFully :" + project.dataValues);
										Task.create({ 
											name: 'Choose a nice MySQL connector', 
											deadline: new Date(), 
											importance: 10 
								}).then(function(task1) {
										console.log("Created task1 successFully :" + task1.dataValues);
										Task.create({ 
											name: 'Build the rest', 
											deadline: new Date(), 
											importance: 90 
								}).then(function(task2) {
										console.log("Created task2 successFully :" + task2.dataValues);
										project.setTasks([task1, task2]
								).then(function(tasks) {
										console.log(project.dataValues);
										console.log(tasks.dataValues);
							})
						})
				})
		})
})