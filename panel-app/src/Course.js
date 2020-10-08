import React from "react";
import CourseTitle from "./Course/CourseTitle";
import CourseList from "./Course/CourseList";

class Course extends React.Component {
    render() {
        return(
            <div className="course">
                <CourseTitle />
                <CourseList />
            </div>
        )
    }
}

export default Course;