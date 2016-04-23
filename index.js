const Sequelize = require('sequelize');
const connection = new Sequelize("demo_schema","root", "root");

const Article = connection.define("NewMaxwell", {
			id: {
			type: Sequelize.INTEGER(11).UNSIGNED,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true 
		},
	title: Sequelize.STRING,
	content: Sequelize.STRING
});

// connection.sync().then(function(){
// 	logging: console.log;
// });

//Insert the data into database
connection.sync().then(function(){
	Article.create({
		title: 'Sequelize Demo',
		content: 'Sequelize uses promises to control async control-flow'
	});
});

//fetch the single record from database
connection.sync().then(function(){	
	Article.findById(3).then(function(article){
		console.log(article.dataValues);
	});
});

//insert and fetch the data from database
connection.sync().then(function(){
	Article.create({
		title: 'Demo Article',
		content: 'Sequelize uses promises to control async control-flow'
	}).then(function(article){		
		console.log(article.dataValues);
		});	
});

//fetch all the data from database
connection.sync().then(function(){	
	Article.findAll().then(function(articles){
		for(var i=0; i<articles.length; i++){
			console.log(articles[i].dataValues);
		}
	});
});