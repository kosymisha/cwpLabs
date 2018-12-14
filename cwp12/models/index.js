const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
	let sequelize = new Sequelize("cwp12", "new", "new",
		{
			dialect: "mssql",
			host: "localhost",
			port: 1434,
			options: {
				instanceName: "MSSQLSERVER"
			},
			logging: false
		});

	sequelize.authenticate().then(() => {
		console.log('Success initialization');
	}).catch((err) => {
		console.log(`${err}`);
		console.log();console.log();console.log();console.log();
	});

	const turtles = Turtle(Sequelize, sequelize);
	const weapons = Weapon(Sequelize, sequelize);
	const pizzas = Pizza(Sequelize, sequelize);


	turtles.belongsTo(pizzas, {
		foreignKey: 'firstFavouritePizzaId',
		as: 'firstFavouritePizza'
	});

	turtles.belongsTo(pizzas, {
		foreignKey: 'secondFavouritePizzaId',
		as: 'secondFavouritePizza'
	});

	turtles.belongsTo(weapons, {
		foreignKey: 'weaponId',
		as: 'weapon'
	});

	return {
		turtles,
		weapons,
		pizzas,

		sequelize: sequelize,
		Sequelize: Sequelize,
	};
};