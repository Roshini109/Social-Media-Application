import './post.css'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/p3.jpeg" alt="" className="postProfileImg" />
                    <span className="postUserName">Safak Kogalu</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey It is my first Post</span>
                <img src="/assets/posts/po1.jpg" alt="" className="postImg" />
                </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/icons/pn2.png" alt="" />
                    <img className="likeIcon" src="/assets/icons/pn4.png" alt="" />
                    <img className="likeIcon" src="/assets/icons/pn6.png" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div> 
  )
}
