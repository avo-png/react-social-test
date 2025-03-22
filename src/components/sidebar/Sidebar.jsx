import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<MdOutlineRssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<MdChat className="sidebarIcon" />
						<span className="sidebarListItemText">Chats</span>
					</li>
					<li className="sidebarListItem">
						<MdOutlineVideoLibrary className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<MdGroups className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<MdBookmark className="sidebarIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<MdQuestionMark className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<MdWork className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<MdEvent className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="sidebarListItem">
						<MdOutlineClass className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
					<li className="sidebarFriend">
						<img
							className="sidebarFriendImg"
							src="/assets/person/2.jpeg"
							alt=""
						/>
						<span className="sidebarFriendName">Jane Doe</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
