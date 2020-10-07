import React, { Component } from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="course">
          <div className="course-title">
            <h3>SERIES : REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h3>
            <div className="course-list">
              <Post title='HƯỚNG DẪN HỌC REACT JS'
                image='./images/1.jpg'
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript'
                tag='React'
                descipt='Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
                với React Js hoặc phần Front End...' />
              <Post title='HƯỚNG DẪN HỌC REACT JS'
                image='./images/1.jpg'
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript'
                tag='React'
                descipt='Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
                với React Js hoặc phần Front End...' />
              <Post title='HƯỚNG DẪN HỌC REACT JS'
                image='./images/1.jpg'
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript'
                tag='React'
                descipt='Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
                với React Js hoặc phần Front End...' />
              <Post title='HƯỚNG DẪN HỌC REACT JS'
                image='./images/1.jpg'
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript'
                tag='React'
                descipt='Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
                với React Js hoặc phần Front End...' />

              
            </div>
          </div>
        </div>
        <div className="post">
        <SlideBar />
          <div className="post-new">
            <div className="post-title">
              <h4>BÀI VIẾT MỚI</h4>
            </div>
            <div className="post-list">
              <NewPost image='./images/1.jpg'
                content='HƯỚNG DẪN HỌC REACT JS '
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript' />
               <NewPost image='./images/1.jpg'
                content='HƯỚNG DẪN HỌC REACT JS '
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript' />
              <NewPost image='./images/1.jpg'
                content='HƯỚNG DẪN HỌC REACT JS '
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript' />
              <NewPost image='./images/1.jpg'
                content='HƯỚNG DẪN HỌC REACT JS '
                infor='Posted by Nguyễn Nhân | Th2 23 2016 | Javascript' /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
class Post extends Component {
  render() {
    return (
      <div >
        <div className="course-detail">
          <div className="course-img">
            <img src={this.props.image} height="180px" width="350px" />
          </div>
          <div className="course-content">
            <h5>{this.props.title}</h5>
            <p>
              <span>{this.props.infor}</span>
            </p>
            <p><span>{this.props.tag} | </span></p>
            <p>
              {this.props.descipt}
            </p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      </div>
    );
  }
}
class SlideBar extends Component {
  render() {
    return (
      <div >
        <div className="post-follow text-center ">
          <h4>ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h4>
          <p>
            <span
            >Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với
            những bài viết chất lượng từ FullStack Statuation bạn nhé</span>
          </p>
          <form action="">
            <input type="text" placeholder="TÊN CỦA BẠN" />
            <input type="text" placeholder="EMAIL CỦA BẠN" />
            <br />
            <p className="text-left">
              <input className="btn-checkbox" type="checkbox" />
              <span>
              Đây là các điều khoản điều chỉnh việc bạn sử dụng sản
                phẩm
              </span>

            </p>
            <button type="submit" className="btn">ĐĂNG KÍ</button>
          </form>
          <p>
          Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không
            spam vì mình cũng rất gét ^__^
          </p>
        </div>
      </div>

    );
  }
}
class NewPost extends Component {
  render() {
    return (
      <div className="post-detail">
        <div className="post-img">
          <img src={this.props.image} height="180px" width="350px" />
        </div>
        <div className="post-content">
          <span>{this.props.content} </span>
          <br />
          <span> {this.props.infor}</span>
        </div>
      </div>

    );
  }
}
