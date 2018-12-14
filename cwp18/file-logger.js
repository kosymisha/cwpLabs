const Logger = require('./logger');
const fs = require('fs');
const EventEmitter = require("events");

class FileLogger extends Logger{
	constructor(file = 'def.txt', prefix = 'prefix', defaultLevel = 'LOG', dateFormat = 'dddd, MMMM YYYY, Do h:mm:ss a') {
		super(prefix, defaultLevel, dateFormat);
		if (file instanceof EventEmitter
			&& typeof test.write === 'function'
			&& typeof test.end === 'function')
		{
			this.file = file;
		}
		else
		{
			this.file = fs.createWriteStream(file);
		}
	}

	log(message, level = this.defaultLevel) {
		return new Promise((resolve, reject) => {
			this.file.write(this.format(message, level), (err) => {
				if (err) {
					console.error(err);
					reject(false);
				}
				else resolve(true);
			});
		});
	}

	close() {
		this.file.close();
	}
}

module.exports = FileLogger;