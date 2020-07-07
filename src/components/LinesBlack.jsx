import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function LinesBlack() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <div className="hide-on-med-and-down">
                <div class="toplineleft-b"></div>
                <div class="toplineright-b"></div>
                <div class="leftline-b"></div>
                <div class="rightline-b"></div>
                <div class="bottomlineleft-b"></div>
                <div class="bottomlineright-b"></div>

            </div>

        </React.Fragment>
    );
}