import React from 'react';

interface Post {
	id: number;
	title: string;
	body: string;
}

interface PostListProps {
	posts: Post[];
	selectedPost: Post | null;
	onPostClick: (postId: number) => void;
}

const PostList: React.FC<PostListProps> = ({
	posts,
	selectedPost,
	onPostClick,
}) => {
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id} onClick={() => onPostClick(post.id)}>
						{post.title}
					</li>
				))}
			</ul>

			{selectedPost && (
				<div>
					<h2>{selectedPost.title}</h2>
					<p>{selectedPost.body}</p>
				</div>
			)}
		</div>
	);
};

export default PostList;
