import React from "react";

class PostContent extends React.Component {
    render() {
        return (
            <div className="post-content">
                <span>{this.props.postTitle} </span>
                <br/>
                <span>Posted by {this.props.postedBy} | {this.props.publishDate} | {this.props.language}</span>

                {/*<span>{this.props.language} | </span>*/}
            </div>
        )
    }
}

export default PostContent;