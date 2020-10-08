import React from "react";

class PostImg extends React.Component {
    render() {
        return(
            <div className="post-img">
                <img src={this.props.image} height="180px" width="350px" alt=""/>
            </div>
        )
    }
}

export default PostImg;