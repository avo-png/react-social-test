import "./rightbar.css";

export default function Rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayContainer">
					<img
						className="birthdayImg"
						src="assets/gift.png"
						alt=""
					/>
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have birthday today
					</span>
				</div>
				<img
					src="assets/ad.png"
					alt=""
					className="rightbarAd"
				/>
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendsList">
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img
								src="assets/person/3.jpeg"
								alt=""
								className="rightbarProfileImg"
							/>
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">Louise Carter</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
