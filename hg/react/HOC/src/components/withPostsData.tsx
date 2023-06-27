import { useEffect, useState } from 'react';

const withPostsData = (WrappedComponent: React.ComponentType<any>) => {
	const WithPostsData = () => {
		const [posts, setPosts] = useState([]);
		const [selectedPost, setSelectedPost] = useState(null);

		useEffect(() => {
			const fetchPosts = async () => {
				try {
					const response = await fetch(
						'https://jsonplaceholder.typicode.com/posts'
					);
					const data = await response.json();
					setPosts(data);
				} catch (error) {
					console.error('Error fetching posts:', error);
				}
			};

			fetchPosts();
		}, []);

		const handlePostClick = (postId: number) => {
			const selectedPost = posts.find((post: any) => post.id === postId);

			if (selectedPost) {
				setSelectedPost(selectedPost);
			}
		};

		return (
			<WrappedComponent
				posts={posts}
				selectedPost={selectedPost}
				onPostClick={handlePostClick}
			/>
		);
	};

	return WithPostsData;
};

export default withPostsData;
