import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Layout from '../Layout';
import ReactPlayer from 'react-player';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    },
    white: {
        color: 'white',
        backgroundColor: 'white',
        fontSize: 20
    }
}));

export default function VideoPlayer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div class="video-container video-contain">
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/G8kdEhmkZic?controls=0" type="video/mp4" />
                {/* <ReactPlayer
                    id="videoBG"
                    width="100%"
                    url='https://www.youtube.com/embed/G8kdEhmkZic?controls=0'
                    volume="1"
                /> */}
            </div>
        </React.Fragment>
    );
}