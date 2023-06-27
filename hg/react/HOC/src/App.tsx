import React from 'react';
import withPostsData from './components/withPostsData';
import PostList from './components//PostList';

import './App.css';
const App: React.FC = () => {
	const PostListWithPostsData = withPostsData(PostList);

	return (
		<div>
			<PostListWithPostsData />
		</div>
	);
};

export default App;
