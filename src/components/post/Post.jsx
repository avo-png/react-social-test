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
						src="/assets/post/1.jpeg"
						alt=""
					/>
				</div>
				<div className="postBottom"></div>
			</div>
		</div>
	);
}
