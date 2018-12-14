const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');
const valid = require("./valid").valid;

router.use(bodyParser.json());

router.post('/create', (req, res) => {
	/*
	
	{
		"vehicleId": 2,
		"fleetId": 1,
		"latitude": 1.0,
		"longitude": 2.0,
		"time":"1.1.1"
	}

	*/
	let err = valid(req);
	if (err === "")
	{
		db.Fleet.findById(req.body.fleetId).then((result) => {
			if (result === null || result.deletedAt !== null)
			{
				console.log("404");
				res.statusCode = 404;
				res.json({error: "404 - not found"});
			}
			else
			{
				db.Motion.create({
					latitude: req.body.latitude,
					longitude: req.body.longitude,
					time: req.body.time,
					vehicleId: req.body.vehicleId
				}).then((result) => {
					res.json(result);
				});
			}
		});
	}
	else
	{
		res.json({ 'error': err });
	}
});

module.exports = router;