import React from "react";

class CourseImg extends React.Component {
    render() {
        return (
            <div className="course-img">
                <img src={this.props.image} height="180px" width="350px" alt={this.props.image}/>
            </div>
        )
    }
}

export default CourseImg;