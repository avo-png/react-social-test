import "./rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";

export default function Rightbar({ profile }) {
	// const HomeRightbar = () => {
	// 	return (
	// 		<>
	// 			<div className="birthdayContainer">
	// 				<img
	// 					className="birthdayImg"
	// 					src="assets/gift.png"
	// 					alt=""
	// 				/>
	// 				<span className="birthdayText">
	// 					<b>Pola Foster</b> and <b>3 other friends</b> have birthday today
	// 				</span>
	// 			</div>
	// 			<img
	// 				src="assets/ad.png"
	// 				alt=""
	// 				className="rightbarAd"
	// 			/>
	// 			<h4 className="rightbarTitle">Online Friends</h4>
	// 			<ul className="rightbarFriendsList">
	// 				{Users.map((u) => (
	// 					<Online
	// 						key={u.id}
	// 						user={u}
	// 					/>
	// 				))}
	// 			</ul>
	// 		</>
	// 	);
	// };

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">User information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">City: </span>
						<span className="rightbarInfoValue">Seattle</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From: </span>
						<span className="rightbarInfoValue">Helsinki</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship: </span>
						<span className="rightbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Jane Doe</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Wick</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Shayla Wilkins</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Lena Brave</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Shannon Douglas</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Amanda Johnson</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<ProfileRightbar />
			</div>
		</div>
	);
}
