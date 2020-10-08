import React from "react";
import PostFollow from "./Post/PostFollow";
import PostNew from "./Post/PostNew";

 class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <PostFollow />
                <PostNew />
            </div>
        )
    }
 }

 export default Post;