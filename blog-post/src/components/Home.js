import React, {useState} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
    const [posts, setPosts] = useState([]);

    const onCreatePostButtonClicked = (post) => {
        post.id = crypto.randomUUID();
        setPosts([...posts, post]);
    }

    const onPostDeleteButtonClicked = (postId) => {
        const filteredPosts = posts.filter(post => post.id !== postId);
        setPosts(filteredPosts);
    }

    return (
        <div className="text-center ma-20">
            <div className="mb-20">
                <Input onCreatePostButtonClick={onCreatePostButtonClicked} />
            </div>
            <div className="posts-section">
                <PostDisplay posts={posts} onPostDeleteButtonClick={onPostDeleteButtonClicked} />
            </div>
        </div>
    );
}

export default Home;
