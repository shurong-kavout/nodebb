'use strict';

const util = require('util');

module.exports = function (redisClient) {
	redisClient.async = {
		send_command: util.promisify(redisClient.send_command).bind(redisClient),

		exists: util.promisify(redisClient.exists).bind(redisClient),

		get: util.promisify(redisClient.get).bind(redisClient),
		set: util.promisify(redisClient.set).bind(redisClient),

		hmset: util.promisify(redisClient.hmset).bind(redisClient),
		hset: util.promisify(redisClient.hset).bind(redisClient),
		hget: util.promisify(redisClient.hget).bind(redisClient),
		hdel: util.promisify(redisClient.hdel).bind(redisClient),
		hgetall: util.promisify(redisClient.hgetall).bind(redisClient),
		hkeys: util.promisify(redisClient.hkeys).bind(redisClient),
		hvals: util.promisify(redisClient.hvals).bind(redisClient),
		hexists: util.promisify(redisClient.hexists).bind(redisClient),
		hincrby: util.promisify(redisClient.hincrby).bind(redisClient),

		zadd: util.promisify(redisClient.zadd).bind(redisClient),
		zrem: util.promisify(redisClient.zrem).bind(redisClient),
		zrange: util.promisify(redisClient.zrange).bind(redisClient),
		zrevrange: util.promisify(redisClient.zrevrange).bind(redisClient),
		zrangebyscore: util.promisify(redisClient.zrangebyscore).bind(redisClient),
		zrevrangebyscore: util.promisify(redisClient.zrevrangebyscore).bind(redisClient),
		zscore: util.promisify(redisClient.zscore).bind(redisClient),

		lpush: util.promisify(redisClient.lpush).bind(redisClient),
		rpush: util.promisify(redisClient.rpush).bind(redisClient),
		rpop: util.promisify(redisClient.rpop).bind(redisClient),
		lrem: util.promisify(redisClient.lrem).bind(redisClient),
		ltrim: util.promisify(redisClient.ltrim).bind(redisClient),
		lrange: util.promisify(redisClient.lrange).bind(redisClient),
		llen: util.promisify(redisClient.llen).bind(redisClient),

	};
};