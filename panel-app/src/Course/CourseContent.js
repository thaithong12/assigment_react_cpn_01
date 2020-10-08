import React from "react";

class CourseContent extends React.Component {
    render() {
        return (
            <div className="course-content">
                <h5>{this.props.nameCourse}</h5>
                <p>
                    <span>Posted by {this.props.postedBy} | {this.props.publishDate} | {this.props.language}</span>
                </p>
                <p><span> {this.props.language}| </span></p>
                <p>
                    {this.props.content}
                </p>
                <button className="btn">READ MORE</button>
            </div>
        )
    }
}
export default CourseContent;