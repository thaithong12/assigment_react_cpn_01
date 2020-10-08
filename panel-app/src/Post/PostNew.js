import React from "react";
import PostList from "./PostList";

class PostNew extends React.Component {
    render() {
        return (
            <div className="post-new">
                <div className="post-title">
                    <h4>BÀI VIẾT MỚI</h4>
                </div>
                <PostList />

            </div>
        )
    }
}
export default PostNew;