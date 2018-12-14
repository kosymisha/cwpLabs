module.exports = async (db) => {
	return Promise.all(
		[
			await db.weapons.create({
				name: 'swords',
				dps: 99
			}),
			await db.weapons.create({
				name: 'pole',
				dps: 73
			}),
			await db.weapons.create({
				name: 'nunchuck',
				dps: 155
			}),
			await db.weapons.create({
				name: 'sais',
				dps: 101
			})
		]
	).then(() => {
		console.log('insert weapons completed');
	}).catch((err) => {
		console.log(err);
	})
};