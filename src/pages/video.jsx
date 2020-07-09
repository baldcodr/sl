import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Layout from '../components/Layout';
import Lines from '../components/Lines';
import FlipButton from '../components/FlipButton';
import VideoSlider from '../components/VideoSlider';
import Social from '../components/Social';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    },
    white: {
        color: 'white',
        backgroundColor: 'white',
        fontSize: 20
    },
    media: {
        width: '500px'
    }
}));

export default function Video() {
    const classes = useStyles();

    return (
			<React.Fragment>
				<Lines />
				<Layout />
				<FlipButton />
				<div className='center hide-on-small-only'>
					<div className='center video-slider'>
						<VideoSlider />
					</div>
				</div>
				<div className='hide-on-med-and-up'>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/ZJvDBltodUE?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/gMa4yte-Xt4?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/AuzMyTHNFDw?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/Dsm6SCBnm9w?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/G8kdEhmkZic?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://www.youtube.com/embed/My05cYX_2iM?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
					<div class='video-container video'>
						<iframe
							className='responsive-video'
							src='https://youtube.com/embed/KGbMzi7UQig?controls=1'
							autoPlay='false'
							frameborder='0'
							allowfullscreen></iframe>
					</div>
				</div>
				<div className='hide-on-med-and-down'>
					<Social />
				</div>
			</React.Fragment>
		);
}