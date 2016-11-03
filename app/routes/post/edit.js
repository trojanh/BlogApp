import Ember from 'ember';

export default Ember.Route.extend({
	action:{
		savePost(newPost) {
			alert('saved');
			newPost.save();
			this.set('newPost',`, Your Post has been published`);
		}
	}
});
