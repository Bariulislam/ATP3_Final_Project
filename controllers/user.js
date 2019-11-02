var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/details', function(request, response){
	userModel.getAll(function(results){
		if(results.length>0){
			response.render('user/detial_index', {user: results});
			//console.log(results);
		}else{
			response.send('invalid user format!');		
		}
	});
	
	//console.log("Details get");
	//response.render('courses/view_course_index');
});

module.exports = router;