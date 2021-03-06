module.exports = async function (db) {
	console.log('Begin insert');
	await db.sequelize.sync({force: true});
	return Promise.all([
		await db.Fleet.create({
			name: "Fleet #1"
		}),
		await db.Fleet.create({
			name: "Fleet #2"
		}),
		await db.Fleet.create({
			name: "Fleet #3"
		}),
		await db.Vehicle.create({
			name: "Car #1",
			fleetId: 1
		}),
		await db.Vehicle.create({
			name: "Car #2",
			fleetId: 1
		}),
		await db.Vehicle.create({
			name: "Car #3",
			fleetId: 2
		}),
		await db.Motion.create({
			latitude: 51.4103,
			longitude: 49.49347,
			time: "2018-10-06T15:26:56.000Z",
			vehicleId: 1
		}),
		await db.Motion.create({
			latitude: 59.1132,
			longitude: 7.1432,
			time: "2018-10-06T15:56:56.000Z",
			vehicleId: 1
		}),
		await db.Motion.create({
			latitude: 71.4103,
			longitude: 120.49347,
			time: "2018-10-06T16:04:00.000Z",
			vehicleId: 1
		})
	]);
};