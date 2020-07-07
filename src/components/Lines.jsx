import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function Lines() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="hide-on-med-and-down">
                <div class="toplineleft"></div>
                <div class="toplineright"></div>
                <div class="leftline"></div>
                <div class="rightline"></div>
                <div class="bottomlineleft"></div>
                <div class="bottomlineright"></div>

            </div>

        </React.Fragment>
    );
}