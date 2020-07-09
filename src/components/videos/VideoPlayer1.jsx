import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import ReactPlayer from "react-player";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "black",
	},
	white: {
		color: "white",
		backgroundColor: "white",
		fontSize: 20,
	},
}));

export default function VideoPlayer() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className='video-container video-contain'>
				<iframe
					width='100%'
					height='auto'
					src='https://www.youtube.com/embed/ZJvDBltodUE'
					frameborder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen></iframe>
				{/* <ReactPlayer
                    width="100%"
                    height="100%"
                url='https://www.youtube.com/embed/gMa4yte-Xt4?controls=0&enablejsapi=1'
                volume="1"
                    /> */}
			</div>
		</React.Fragment>
	);
}
