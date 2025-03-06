import React from "react";

function PostDisplay({ posts = [], onPostDeleteButtonClick }) {
    return (
        <div data-testid="posts-container" className="flex wrap gap-10">
            {posts.length > 0 && posts.map((post) => (
                <div className="post-box" key={post.id}>
                    <h3>{ post.title }</h3>
                    <p>{ post.description }</p>
                    <button onClick={() => onPostDeleteButtonClick(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PostDisplay;
