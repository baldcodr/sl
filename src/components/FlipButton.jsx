import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';
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

            <NavLink
                to="/signup"
              ><img className="fltbtn hide-on-med-and-down" src="https://res.cloudinary.com/sl-asset/image/upload/v1593333250/SIGN_hqrwon.png" alt="sign up" /></NavLink>


        </React.Fragment>
    );
}