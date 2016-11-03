import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findAll('post',params.id);
	},
	actions:{
		deletePost(post) {
			let confirmation = confirm('Are you sure?');

			if (confirmation) {
				post.destroyRecord();
				this.transitionTo('posts');
			}
		}
	}

});