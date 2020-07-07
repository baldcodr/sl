import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Dailymotion from 'react-dailymotion';
import { Component } from 'react';
import YouTube from 'react-youtube';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}
export default class landingPage extends React.Component {

    render() {
        const opts = {
            width: '100%',
            height: '480px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                loop: 1,
                modestbranding: 1,
                controls: 0,
                playsinline: 1
            },
            events: {
                'onReady': onPlayerReady
            }
        };
        return (
            <React.Fragment >
                <div id="landingpg">
                    <div className="block"></div>
                    <div className="clip-right-top hide-on-small-only"></div>
                    {/* <div className="clip-right-bottom hidden" ></div> */}
                    <div className="clip-left-top hide-on-small-only"></div>
                    <header className="page-header transparent">
                        <div className="row">
                            <div className="col s12 m4 l8">
                                <nav className="z-depth-0 transparent">
                                    <a href="/" className="brand-logo center"><img
                                        src="https://res.cloudinary.com/sl-asset/image/upload/v1591801888/sl-asset/SL_Logo-1_1_snvdkr.png"
                                        width="115px" alt="SL logo" /></a>
                                </nav>
                            </div>

                        </div>
                    </header>
                    {/* <a href="/home"><img className="enterbtn hide-on-small-only" src="https://res.cloudinary.com/sl-asset/image/upload/v1593285307/sl-asset/enter-btn_yv8wnh.png" alt="ENTER" />
                    </a> */}
                    <div className="vid">
                        {/* <video loop="true" autoPlay="true" muted="true" width="100%" src="https://res.cloudinary.com/sl-asset/video/upload/v1590851363/sl-asset/sl_sthorf.mp4" fullscreen class="hide-on-med-and-down" id="videoBG">
                    </video> */}
                         <div class="responsive-video">
                            <iframe autoplay autoPlay="true" width='100%' height='480px' className="responsive-video" src="https://www.youtube.com/embed/ryHGEKUiVWE?controls=0&autoplay=1&loop=1&mute=0&playsinline=1&modestbranding=1" autoPlay="autoplay" frameborder="0" allow='autoplay; encrypted-media; loop; playsinline;' allowfullscreen ></iframe>
                        </div> 
                         {/* <YouTube
                            videoId="ryHGEKUiVWE"
                            opts={opts}
                            autoplay="true"
                        />  */}
                    </div>
                    <div className="ep">
                        <footer className=" footer transparent">
                            <div className="">
                                <nav className="center z-depth-0 transparent landing-footer">
                                <img className="brand-logo eptitle center responsive-img" src="https://res.cloudinary.com/sl-asset/image/upload/v1593495925/sl-asset/eptitle_jcyc8r.png"/>
                                    <h6 className="tracks center hide-on-small-only">
                                        leave me alone&nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp;bad luck&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hit the block ft. pa salieu&nbsp;&nbsp;&nbsp;&#8208;&nbsp;&nbsp;&nbsp;little bird
                                </h6>
                                </nav>
                            </div>
                        </footer>
                        {/* <div class="row ep">
                            <div class="col s3">leave me alone</div>
                            <div class="col s3">bad luck</div>
                            <div class="col s3">hit the block ft. pa salieu</div>
                            <div class="col s3">little bird</div>
                        </div> */}
                        <ul className="center tracks hide-on-med-and-up song-list">
                            <li className="song ">leave me alone</li>
                            <li className="song">bad luck</li>
                            <li className="song">hit the block ft. pa salieu</li>
                            <li className="song">little bird</li>
                        </ul>
                        {/* <div className="center footer-landing hide-on-med-and-up black-text"><a className="black-text" href="/home">enter</a></div> */}
                    </div>
                    <p className="privacy center hide-on-small-only">
                        <a href="https://www.umusic.co.uk/terms.html" className="privacy-list ">terms &#38; conditions</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.umusic.co.uk/privacy.html" className="privacy-list">privacy policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.umusic.co.uk/cookie-info.html" className="privacy-list">cookie info</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.umusic.co.uk/home/safe.php" className="privacy-list">safe surf guide</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="" className="white-text">virgin emi records 2020</a>
                    </p>
                    <div className="block2"></div>
                </div>
            </React.Fragment>
        )
    }
}