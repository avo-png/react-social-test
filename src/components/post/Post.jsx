import "./post.css";
import { MdOutlineMoreVert } from "react-icons/md";

export default function Post() {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src="/assets/person/1.jpeg"
							alt=""
						/>
						<span className="postUsername">Jane Doe</span>
						<span className="postDate">5 mins ago</span>
					</div>
					<div className="postTopRight">
						<MdOutlineMoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">Hey! It's my first post</span>
					<img
						className="postImg"
						src="assets/post/1.jpeg"
						alt=""
					/>
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="assets/like.png"
							alt=""
						/>
						<img
							className="likeIcon"
							src="assets/heart.png"
							alt=""
						/>
						<span className="postLikeCounter">32 people liked it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">9 comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
