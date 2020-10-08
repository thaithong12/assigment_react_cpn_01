import React from "react";
import PostDetail from "./PostDetail";

class PostList extends React.Component {
    render() {
        return (
            <div className={'post-list'}>
                <PostDetail image={'./images/1.jpg'}
                            postTitle={'HƯỚNG DẪN HỌC REACT JS'}
                            postedBy={'Nguyễn Nhân'}
                            publishDate={'Th2 23 2016'}
                            language={'Javascript'}
                />
                <PostDetail image={'./images/1.jpg'}
                            postTitle={'HƯỚNG DẪN HỌC REACT JS'}
                            postedBy={'Nguyễn Nhân'}
                            publishDate={'Th2 23 2016'}
                            language={'Javascript'}
                />
                <PostDetail image={'./images/1.jpg'}
                            postTitle={'HƯỚNG DẪN HỌC REACT JS'}
                            postedBy={'Nguyễn Nhân'}
                            publishDate={'Th2 23 2016'}
                            language={'Javascript'}
                />
                <PostDetail image={'./images/1.jpg'}
                            postTitle={'HƯỚNG DẪN HỌC REACT JS'}
                            postedBy={'Nguyễn Nhân'}
                            publishDate={'Th2 23 2016'}
                            language={'Javascript'}
                />
                <PostDetail image={'./images/1.jpg'}
                            postTitle={'HƯỚNG DẪN HỌC REACT JS'}
                            postedBy={'Nguyễn Nhân'}
                            publishDate={'Th2 23 2016'}
                            language={'Javascript'}
                />

            </div>
        )
    }
}

export default PostList;