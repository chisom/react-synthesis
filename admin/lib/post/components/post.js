// single post render
import React from 'react';
import { Link } from 'react-router';

//	Pure Functions
function PostTitle(props) {
	return <h2>{props.title}</h2>
}

function PostBody(props) {
	return <h2>{props.body}</h2>
}

function PostType(props) {
	return <h2>{props.type}</h2>
}

function PostId(props) {
	return <h2>{props.id}</h2>
}

function PostAuthor(props) {
	return <h2>{props.author}</h2>
}

function PostDate(props) {
	return <h2>{props.date}</h2>
}

// convert post title to url title
function createUrl(props) {
		let postUrl = $(props.title).val()
		postUrl = postUrl.toLowerCase();
		postUrl = postUrl.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");   //this one
		postUrl = postUrl.replace(/\s+/g, "-");
		return postUrl;
};


function PostDetails(props) {
	return <div>
		<PostTitle title={props.post.title} />
		<PostBody body={props.post.body} />
		<PostType type={props.post.type} />
		<PostId id={props.post.id} />
		<PostAuthor author={props.post.author} />
		<PostDate date={props.post.date} />
	</div>
}

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() { 
//     return <ul> {this.props.post(renderPost)} </ul>;
//   }

//   renderPost({body, author}) {
//     return <li>{body}—{author}</li>;
//   }
// }


export default class Post extends React.Component {
	render() {
		return (
			<PostDetails />
		)
	}
}