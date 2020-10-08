import React from "react";
import PostImg from "./PostImg";
import PostContent from "./PostContent";

class PostDetail extends React.Component {
    render() {
        return (
            <div className="post-detail">
                <PostImg {...this.props} />
                <PostContent {...this.props}/>
            </div>
        )
    }
}

export default PostDetail;