'use strict';

module.exports = function(app) {
	var posts = require('../controllers/postController');

	// posts Routes
	app.route('/api/posts')
		.get(posts.list_all_posts)
		.post(posts.create_a_post);

	app.route('/api/posts/:PostId')
		.get(posts.read_a_post)
		.put(posts.update_a_post)
		.delete(posts.delete_a_post);
};