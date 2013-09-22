var RDB = require('./redis.js'),
	utils = require('./../public/src/utils.js'),
	schema = require('./schema.js'),
	user = require('./user.js'),
	topics = require('./topics.js'),
	favourites = require('./favourites.js'),
	threadTools = require('./threadTools.js'),
	postTools = require('./postTools'),
	feed = require('./feed.js'),
	async = require('async'),
	plugins = require('./plugins'),
	reds = require('reds'),
	postSearch = reds.createSearch('nodebbpostsearch'),
	nconf = require('nconf'),
	meta = require('./meta.js'),
	winston = require('winston');

(function(Revisions) {

	Revisions.getRevisionsByPid = function(pid, start, end, callback) {
		var revisions = [];

		RDB.lrange('revision:post:'+pid, start, end, function(err_lrange, result_lrange) {

			console.log(err_lrange, result_lrange)
			if(!err_lrange) {
				callback(null, result_lrange)
			} else {
				callback(err, null)
			}

		})

	}

}(exports));
