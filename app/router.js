import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('about');
	this.route('post', {path: 'post/:title'}, function() {
		this.route('edit', {
			path: '/edit'
		});
	});
	this.route('posts');
	this.route('new');
});

export default Router;
