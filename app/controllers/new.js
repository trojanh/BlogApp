import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		sendPost(){
			var author=this.get('author');
			var title=this.get('title');
			var description=this.get('description');


			var post=this.store.createRecord('post',{
				author: author,
				title: title,
				description: description
			});

			this.set('author','');
			this.set('title','');
			this.set('description','');

			post.save().then((response)=>{


			});
			this.set('sendPost',author+ `, Your Post has been published`);

			
		}

		
	}
});
