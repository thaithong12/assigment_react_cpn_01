import React from "react";

class  PostFollow extends React.Component {
    render() {
        return (
            <div className="post-follow text-center">
                <h4>ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h4>
                <p>
            <span
            >Công nghệ đang thay đổi nhanh chóng hãy cùng vươn ra thế giới với
              những bài viết chất lượng từ FullStack Statuation bạn nhé</span
            >
                </p>
                <form action="">
                    <input type="text" placeholder="TÊN CỦA BẠN"/>
                    <input type="text" placeholder="EMAIL CỦA BẠN"/>
                    <br/>
                    <p className="text-left">
                        <input className="btn-checkbox" type="checkbox"/>
                        <span
                        >Đây là các điều khoản điều chỉnh việc bạn sử dụng sản
                phẩm</span
                        >
                    </p>
                    <button type="submit" className="btn">ĐĂNG KÍ</button>
                </form>
                <p>
                    Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không
                    spam vì mình cũng rất gét ^__^
                </p>
            </div>
        )
    }
}

export default PostFollow;