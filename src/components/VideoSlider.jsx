import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer1 from "./videos/VideoPlayer1";
import VideoPlayer2 from "./videos/VideoPlayer2";
import VideoPlayer3 from "./videos/VideoPlayer3";
import VideoPlayer4 from "./videos/VideoPlayer4";
import VideoPlayer5 from "./videos/VideoPlayer5";
import VideoPlayer6 from "./videos/VideoPlayer6";
import VideoPlayer7 from "./videos/VideoPlayer7";



export default class VideoSlider extends Component {
    state = {
        display: true,
        height: '100%'
    };
    render() {
        const settings = {
            dots: true,
            adaptiveHeight: true,
            infinite: false,
            width: "100%",
            height: "100%",
            speed: 500,
            cssEase: 'linear',
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            useTransform: true
        };
        return (
					<React.Fragment>
						<div className='video-container'>
							<Slider className='center' {...settings}>
								<div>
									<VideoPlayer1 />
								</div>
								<div>
									<VideoPlayer2 />
								</div>
								<div>
									<VideoPlayer4 />
								</div>
								<div>
									<VideoPlayer5 />
								</div>
								<div>
									<VideoPlayer6 />
								</div>
								<div>
									<VideoPlayer7 />
								</div>
								<div>
									<VideoPlayer3 />
								</div>
							</Slider>
						</div>
					</React.Fragment>
				);
    }
}