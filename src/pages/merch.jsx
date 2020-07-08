import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";
import FlipButton from "../components/FlipButton";
import Lines from "../components/Lines";
import FooterNav from "../components/FooterNav";
import MobileMenu from "../components/MobileMenu";
import Social from '../components/Social';


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
			{/* Dekstop Gif */}
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
			{/* Mobile GIf */}
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
			<FooterNav />
			<Social/>
		</React.Fragment>
	);
}
