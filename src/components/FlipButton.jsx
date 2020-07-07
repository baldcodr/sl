import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function FlipButton() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <a href="/signup"><img className="fltbtn hide-on-med-and-down" src="https://res.cloudinary.com/sl-asset/image/upload/v1593333250/SIGN_hqrwon.png" alt="sign up" /></a> 
            {/* <a href="#"><img className="fltbtn" src="https://res.cloudinary.com/sl-asset/image/upload/v1591804268/sl-asset/SIGN_BTN_MOB_xqowxr.png" alt="sign up" />
</a> */}


        </React.Fragment>
    );
}