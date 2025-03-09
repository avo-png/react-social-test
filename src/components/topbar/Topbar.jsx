import "./topbar.css";

export default function Topbar() {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Lamasocial</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					{/* Search icon */}
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
					<div className="topbarIconItem">{/* Person Icon Here */}</div>
				</div>
			</div>
		</div>
	);
}
