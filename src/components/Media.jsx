import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-block',
        minWidth: 700,
        position: 'center'
    },
    details: {
        display: 'flex',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 700,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className="videos">
            <div id="controls">
                <div id="toggle-audio">
                    <i class="fa fa-volume-up" aria-hidden="true"></i>
                    <i class="fa fa-volume-off" aria-hidden="true"></i>
                </div>
                <div id="toggle-play" class="paused">
                    <i class="fa fa-play" aria-hidden="true"></i>
                    <i class="fa fa-pause" aria-hidden="true"></i>
                </div>
                <div class="video-title">
                    <h2>Pretty Girl</h2>
                </div>
            </div>
        </div>
    );
}
