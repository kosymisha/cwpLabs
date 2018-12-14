const FileLogger = require('./file-logger');

let queue = [];

class DeferredFileLogger extends FileLogger{
	constructor(file = "defferedDefFile.txt", queueLength = 1, prefix = "prefix", defaultLevel = "LOG", dateFormat = 'dddd, MMMM YYYY, Do h:mm:ss a') {
		super(file, prefix, defaultLevel, dateFormat);
		this.queueLength = queueLength;
	}

	log(message, level = this.defaultLevel) {
		return new Promise((resolve, reject) => {
			queue.push(this.format(message));
			if (queue.length === this.queueLength)
			{
				this.file.write(queue.join(''), (err) => {
					if (err) {
						console.error(err);
						reject(false);
					}
					else {
						queue = [];
						resolve(true);
					}
				});
			}
			else
			{
				resolve(true);
			}
		});
	}
}

module.exports = DeferredFileLogger;