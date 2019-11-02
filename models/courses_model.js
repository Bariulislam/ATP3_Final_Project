var db = require('./db')

module.exports = {
	
	insert: function(course, callback){

		var sql ="insert into `courses` values('', ?, ?, ?, ?)";
		db.execute(sql, [course.course_name, course.credit, course.teacher_id, course.teacher_name], function(status){
			callback(status);
		});
	},
	view_course: function(user, callback){
		var sql = " SELECT * FROM `courses` WHERE `teacher_id` = ?";
		db.getResults(sql, [user.name], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	},
	view_all_course: function(callback){
		var sql = " SELECT * FROM `courses`";
		db.getResults(sql, [], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	}
}