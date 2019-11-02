var express = require('express');
var courseModel = require('./../models/courses_model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('courses/add_course_index');
});

router.post('/', function(request, response){
	
	var course = {
		course_name: request.body.course_name,
		credit: request.body.credit,
		teacher_id: request.body.teacher_id,
		teacher_name: request.body.teacher_name
	};

	courseModel.insert(course, function(status){
		if(status){
			response.redirect('/home');
		}else{
			response.send('invalid course format!');		
		}
	});

});

module.exports = router;
