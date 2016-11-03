import DS from 'ember-data';

var Post = DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	author: DS.attr('string')
});

Post.reopenClass({
	FIXTURES: [
	{
		id: 1,
		title: "Fixture Adapter.ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
		author: "rajan",
		description: "Lorem ipsum dolor sit amet,consectetur adipisicing consectetur adipisicing elit. Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam orem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consecteturorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elit adipisicingconsectetur adipisicing elitveritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
	},
	{
		id: 2,
		title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
		author: "consectetur adipisicing",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicingplaceat ducimus aliquam veritatis ullam sed!orem ipsum dolororem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur orem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elitadipisicingconsectetur adipisicing elit sit amet, consectetur adipisicingconsectetur adipisicing elit Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
	},
	{
		id: 3,
		title: "Ember ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
		author: "ipsum dolor",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elit.orem ipsum dolor sit amet, consectetur adipisicingconsectetur adipisicing elit Laudantium aspernatur quam qui commodi beatae placeat ducimus aliquam veritatis ullam sed! Sit assumenda aspernatur sunt harum accusamus, repellat labore! Repellendus, corporis!"
	}

	]
});

export default Post;