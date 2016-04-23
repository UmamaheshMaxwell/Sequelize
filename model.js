const Sequelize = require('sequelize');
const connection = new Sequelize("demo_schema","root", "root");

const Article = connection.define("SampleDemo", {
		title: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false
		},
		content: {
			type: Sequelize.STRING,
			defaultValue: 'Coming soon...'
		}
	},
	{
	timestamps: false,
	freezeTableName: true   
});


connection.sync({ force: true}).then(function(){
	logging: console.log;
});
