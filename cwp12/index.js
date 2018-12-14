const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);
const Op = Sequelize.Op;

(async () => {

	await db.sequelize.sync({force: true});
	await require('./initTables/pizzas')(db);
	await require('./initTables/weapons')(db);
	await require('./initTables/turtles')(db);

	console.log("\nturtles:");
	(await db.turtles.findAll()).forEach((v) => {
		console.log(v.name);
	});


	console.log('\nwho like mozzarella');
	(await db.turtles.findAll({
		where: {
			'$firstFavouritePizza.name$': 'mozzarella'
		},
		include: [{
			model: db.pizzas,
			as: 'firstFavouritePizza'
		}]
	})).forEach((v) => {
		console.log(v.name);
	});


	console.log('\nturtle`s favourite pizzas');
	(await db.turtles.findAll({
		include: [{
			model: db.pizzas,
			as: 'firstFavouritePizza'
		}]
	})).forEach((v) => {
		let obj = v.dataValues.firstFavouritePizza.dataValues;
		console.log(`for ${v.dataValues.name}   ${obj.name} id:${obj.id}`);
	});


	console.log('\nnew turtles');
	await db.turtles.create({
		name: 'misha',
		color: 'purple',
		weaponId: 4,
		firstFavouritePizzaId: 1,
		secondFavouritePizzaId: 3
	}).then(function(row) {
		console.log(row.dataValues);
	});


	console.log('\nsuper fat update');
	await db.pizzas.update(
		{
			description : 'SUPER FAT!'
		},
		{
			where: {
				calories: {
					[Op.gt]: 3000
				}
			}
		}
	).then(function(row) {
		console.log(`${row} update complete`);
	});


	console.log('\ndps > 100');
	console.log(`count = ${(await db.weapons.findAll(
		{
			where: {
				dps: {
					[Op.gt]: 100
				}
			}
		})).length}`);


	console.log('\npizza with id = 1');
	(await db.pizzas.findAll({
		where: {
			id: 1
		}
	})).forEach((val) => {
		console.log(`Name = ${val.name}`);
	});


	console.log('\nupdate pizza for turtle');
	(await db.turtles.update(
		{
			firstFavouritePizzaId: 2
		},
		{
			where: {
				id: 5
			}
		}
	)).forEach(() => {
		console.log(`update complete`);
	});

	console.log('\ndone');
})();