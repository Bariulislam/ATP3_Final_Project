var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from user where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	
	getByName: function(user, callback){
		var sql = "SELECT * FROM `user` WHERE `user_id` = ?";
			db.getResults(sql, [user.name], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from user where user_id=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from user";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){

		var sql ="insert into user values('', ?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [user.firstName, user.lastName, user.username, user.address, user.email, user.password, user.job], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="UPDATE `user` SET `first_name`=?,`last_name`=? ,`address`=? ,`email`=?  WHERE `user_id`= ?";
	
		db.execute(sql, [user.firstName, user.lastName, user.address, user.email, user.username], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}



