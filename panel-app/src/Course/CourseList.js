import React from "react";
import CourseDetail from './CourseDetail'

class CourseList extends React.Component {
    render() {
        return (
            <div className="course-list">
                <CourseDetail image={'./images/1.jpg'}
                              nameCourse={'HƯỚNG DẪN HỌC REACT JS'}
                              postedBy={'Nguyễn Nhân'}
                              publishDate={'Th2 23 2016'}
                              language={'Javascript'}
                              content={' Hướng dẫn học React js sao cho hiệu suất. Nếu bạn mới làm quen\n' +
                              '                với React Js hoặc phần Front End...'}
                />
                <CourseDetail image={'./images/1.jpg'}
                              nameCourse={'HƯỚNG DẪN HỌC REACT JS'}
                              postedBy={'Nguyễn Nhân'}
                              publishDate={'Th2 23 2016'}
                              language={'Javascript'}
                              content={' Hướng dẫn học React js sao cho hiệu suất. Nếu bạn mới làm quen\n' +
                              '                với React Js hoặc phần Front End...'}
                />
                <CourseDetail image={'./images/1.jpg'}
                              nameCourse={'HƯỚNG DẪN HỌC REACT JS'}
                              postedBy={'Nguyễn Nhân'}
                              publishDate={'Th2 23 2016'}
                              language={'Javascript'}
                              content={' Hướng dẫn học React js sao cho hiệu suất. Nếu bạn mới làm quen\n' +
                              '                với React Js hoặc phần Front End...'}
                />
                <CourseDetail image={'./images/1.jpg'}
                              nameCourse={'HƯỚNG DẪN HỌC REACT JS'}
                              postedBy={'Nguyễn Nhân'}
                              publishDate={'Th2 23 2016'}
                              language={'Javascript'}
                              content={' Hướng dẫn học React js sao cho hiệu suất. Nếu bạn mới làm quen\n' +
                              '                với React Js hoặc phần Front End...'}
                />
            </div>
        )
    }
}

export default CourseList;