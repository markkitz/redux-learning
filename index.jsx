const Redux = require('redux');
const thunk = require('redux-thunk');
const React = require('react');
const actions = require('./actions.jsx');
const ReactDOM = require('react-dom');
const {Component } = React;
const {createStore, applyMiddleware } = Redux;
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

console.log(actions);

function reducer (state =[], action ) {
	switch(action.type){
		case 'TESTACTION':
			console.log(action);
			return action.posts;
		default:
			return state;	
	}	
}


 
 
 


const store = createStoreWithMiddleware(reducer);
console.log('before', store.getState());

store.dispatch(actions.actionAsyn());

//console.log('after', store.getState());

setTimeout(() => {
	console.log('new',store.getState());
	}, 1100);
	
class RedditPost extends Component {
	render() {
		return <li >{this.props.post.title}</li>;
	}
}	
	
class RedditPosts extends Component {
	render(){
		console.log(this.props.posts)
		return(<ul>
			
				{this.props.posts.map( post => 
				 
					<RedditPost key={post.id} post={post}></RedditPost>			
				)} 
				
		 </ul> );
	}
}


const render = () => {
	ReactDOM.render(
		
		<RedditPosts posts={store.getState()} />, document.getElementById('root')
		
		
		
	);	
};
store.subscribe(render);
render();
