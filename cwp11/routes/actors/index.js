const express = require('express');
const router = express.Router();
const logger = require('../../log/log.js');
let actors = require("../../actors.json");

const errCreate = {code: 400, message: 'error in creating '}
const validErr = {code: 400, message: 'validating error '}
const idErr = {code: 400, message: 'Where is id?'}
const invId = {code: 400, message: 'invalid id'}
const invBirth = {code: 400, message: 'invalid birth'}

const readAllActors = require("./readAllActors").readAll;
const readActor = require("./readActor").readActor;
const createActor = require("./createActor").createActor;
const updateActor = require("./updateActor").updateActor;
const deleteActor = require("./deleteActor").deleteActor;


router.get('/readall', (req, res) =>
{
	logger.log(`${req.url.toString()}\n`);
	console.log("readall");
	readAllActors(req, res, (err, result) =>
	{
		res.send(JSON.stringify(result));
	});
});

router.get('/read/:id', (req, res) =>
{
	console.log("read: " + req.params.id);
	logger.log(`${req.url.toString() + " " + req.params.id}\n`);
	readActor(req, res, req.params, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/create', (req, res) => {
	/*
	console.log("FFFFFFFFFFFFFFFFFFFFFFf");
	let r = req.body;
    logger.log(req.url.toString() + '\n' + r.name + ' ' + r.birth + ' ' + r.films + ' ' + r.liked);      
    let obj = {};
    obj.id = Date.now();
    if(!r.name || ! r.birth || !r.films || !r.liked || !r.photo){
      res.json(errCreate);
      return;
    }
    let flag = true;
    obj.name = r.name;
    obj.budget = parseInt(r.budget) <= 0 ? flag = false : r.budget;
    obj.liked = parseInt(r.liked) < 0 ? flag = false : r.liked;
    obj.photo = r.photo;
    
    obj.birth = r.birth;
    if(!flag){
      res.json(validErr);
      return;
    }
    actors.push(obj);
    res.json(obj);*/
	
	console.log("create bb");
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	req = req.body;
	createActor(req, res, req, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/update', (req, res) => {
	console.log("update bb");
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	req = req.body;
	updateActor(req, res, req, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

router.post('/delete', (req, res) => {
	logger.log(`${req.url.toString() + " " + req.body}\n`);
	req = req.body;
	deleteActor(req, res, req, (err, result) =>
	{
		if (err)
		{
			res.send(JSON.stringify(err));
		}
		else
		{
			res.send(JSON.stringify(result));
		}
	});
});

module.exports = router;