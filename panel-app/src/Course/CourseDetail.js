import React from "react";
import CourseImg from "./CourseImg";
import CourseContent from "./CourseContent";

class CourseDetail extends React.Component {
    render() {
        return (
            <div className={'course-detail'}>
                <CourseImg {...this.props}/>
                <CourseContent {...this.props}/>
            </div>
        )
    }
}
export default  CourseDetail;