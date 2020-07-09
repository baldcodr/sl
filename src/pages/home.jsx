import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Lines from "../components/Lines";
import FlipButton from "../components/FlipButton";
import Social from "../components/Social";
// import { useSpring, animated } from 'react-spring';
import Vimeo from "@u-wave/react-vimeo";
import Dailymotion from "react-dailymotion";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "black",
	},
}));

export default class Home extends Component {
	state = {
		isMute: false,
		isHidden: false,
		muted: false,
	};
	render() {
		const { muted } = this.state;

		// const props = useSpring({ opacity: 1, from: { opacity: 0 } })
		// const { hide } = this.state;

		return (
			<React.Fragment>
				<div className='page'>
					<img
						id='imageBG'
						className='hide-on-large-only'
						src='https://res.cloudinary.com/sl-asset/image/upload/v1593986410/sl-asset/SL_POP_kbsr5b.jpg'
						alt='background mobile'
					/>
					{/* Mobile Gif */}
					<div className='center' id='mobgif'>
						<img
							className='responsive-img mobgif hide-on-large-only'
							src='https://res.cloudinary.com/sl-asset/image/upload/v1593351191/sl-asset/faces_u8rc9j.gif'
							alt='listen to sl music'
						/>
					</div>
					<Lines />
					<Layout />
					<FlipButton />
					{/* Desktop Gif */}
					<div className='main center faces hide-on-med-and-down'>
						<div className='center face'>
							<img
								className='responsive-img center face'
								src='https://res.cloudinary.com/sl-asset/image/upload/v1593351191/sl-asset/faces_u8rc9j.gif'
							/>
						</div>
					</div>
					{/* Sound and off toggle */}
					<div
						className='volume hide-on-med-and-down'
						onClick={() => this.setState({ muted: !muted })}>
						sound {this.state.muted ? "on" : "off"}
					</div>
					{/* Desktop Background */}
					<div className='overlay hide-on-med-and-down'>
						<video width='100%' height='auto' loop autoPlay muted={!muted}>
							<source
								src='https://officialsl-video.s3.eu-west-2.amazonaws.com/sl-video_trim.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</video>
						{/* <ReactPlayer
							url='https://player.vimeo.com/video/434782732?autoplay=1&loop=1'
							width='100%'
							height='auto'
                            playing
                            className='audio'
							loop='true'
							volume='1'
							muted={muted}
							webkitAllowFullScreen
							mozallowfullscreen
							allowfullscreen
						/> */}
					</div>
					<div>
						<Social />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
