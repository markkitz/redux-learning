const fetch = require( 'isomorphic-fetch');
export const TESTACTION = 'TESTACTION'

export function recievePosts(json) {
  return {
    type: TESTACTION, 
    posts: json.data.children.map(child => child.data)
  }
}

export function actionAsyn() {
	return dispatch => {
		//dispatch(testAction(value))
		
		return fetch("https://www.reddit.com/r/reactjs.json").then(response => response.json())
		.then(json =>{
			dispatch(recievePosts(json));
			console.log('done');
		} )
	};
}