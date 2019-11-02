var express = require('express');
var db = require('./../models/db');

var router = express.Router();

router.get('/', function(request, response){
		//var obj = {};
		if(request.cookies['username'] != null){
			var user = {
				name: request.cookies['username']
			};
			var sql = "SELECT * FROM `user` WHERE `user_id` = ?";
			db.getResults(sql, [user.name], function(result){
				if(result.length > 0 ){
					//obj = {print: result};
					if(result[0].job=="admin"){
						response.render('home/adminindex', {users: result});	
					}
					else if(result[0].job=="student"){
						response.render('home/studentindex', {users: result});	
					}
					else if(result[0].job=="teacher"){
						response.render('home/teacherindex', {users: result});	
					}
					console.log(result[0].job);
				}else{
					callback([]);
				}
			});		
		}else{
			response.redirect('/logout');
		}	
});

module.exports = router;



