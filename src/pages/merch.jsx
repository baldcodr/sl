import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";
import FlipButton from "../components/FlipButton";
import Lines from "../components/Lines";
import FooterNav from "../components/FooterNav";
import MobileMenu from "../components/MobileMenu";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "black",
	},
}));

export default function Merch() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Helmet
				bodyAttributes={{ style: "background-color : #111011 !important" }}
			/>
			<Lines />
			<HeaderNav />
			<MobileMenu />
			<FlipButton />

			<div className='main center coming-soon2 hide-on-small-only'>
				<video
					className='responsive-video coming-soon2'
					autoPlay='true'
					loop
					width=''>
					<source
						src='https://res.cloudinary.com/sl-asset/video/upload/v1591793638/sl-asset/SMILE_Trim_gjeaht.mp4'
						type='video/mp4'
					/>
					Your browser does not support HTML5 video.
				</video>
			</div>
			<div className='main center coming-soon hide-on-med-and-up'>
				<video
					className='responsive-video'
					allow='autoplay'
					autoPlay='true'
					loop
					width='500'>
					<source
						src='https://res.cloudinary.com/sl-asset/video/upload/v1591795313/sl-asset/MERCH_Trim_tnzryn.mp4'
						type='video/mp4'
					/>
					Your browser does not support HTML5 video.
				</video>
			</div>

			<footer className='footer transparent merch'>
				<div className='footer-center hide-on-meduim-and-up'>
					<nav className='z-depth-0 transparent center footer-center merch'>
						<ul id=''>
							<li>
								<a
									href='https://music.apple.com/gb/artist/sl/432643700'
									className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661804/sl-asset/apple_lejfbw.png'
										width='20px'></img>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/officialsl' className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661807/sl-asset/twitter_t5ezyn.png'
										width='20px'></img>
								</a>
							</li>
							<li>
								<a href='https://soundcloud.com/sl39269' className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661806/sl-asset/soundcloud_jvkjbu.png'
										width='20px'></img>
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/channel/UC16Jppb49O5WW54ZyWnJz_w'
									className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661810/sl-asset/youtube_pbt4tj.png'
										width='20px'></img>
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/officialsl'
									className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661805/sl-asset/instagram_ahlc9k.png'
										width='20px'></img>
								</a>
							</li>
							<li>
								<a
									href='https://open.spotify.com/artist/0wY1K9SgxbaRfoFRmSR5x5?si=-iW9fHtcSheLTMufEstpFQ'
									className='center'>
									<img
										className='social'
										src='https://res.cloudinary.com/sl-asset/image/upload/v1590661807/sl-asset/spotify_s0dlsw.png'
										width='20px'></img>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
			<FooterNav />
		</React.Fragment>
	);
}
