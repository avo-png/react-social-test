import "./topbar.css";
import {
	MdOutlineSearch,
	MdPerson,
	MdChatBubble,
	MdNotifications,
} from "react-icons/md";

export default function Topbar() {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Lamasocial</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<MdOutlineSearch className="searchIcon" />
					<input
						placeholder="Search for friends, posts, or video"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<MdPerson />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<MdChatBubble />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<MdNotifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<img
					src="assets/person/1.jpeg"
					alt=""
					className="topbarImg"
				/>
			</div>
		</div>
	);
}
