import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingBottom: '10px'
    },
    navlink: {
        fontFamily: 'Druk Text Wide Bold Italic',
        color: 'white',
        fontSize: '10px',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    }
}));

export default function FooterNav() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <footer className="footer transparent">
                    <div className="footer-left hide-on-med-and-down z-depth-0">
                        <ul className="">
                             <NavLink
                                to="/merch"
                                className={classes.navlink}
                                activeStyle={{
                                    color: "#e5f31a"
                            }}>MERCH</NavLink> 
                        </ul>
                    </div>
                    <div className="footer-right hide-on-med-and-down z-depth-0">
                        <ul >
                            <NavLink
                                to="/video"
                                className={classes.navlink}
                                activeStyle={{
                                    color: "#e5f31a"
                                }}>VIDEO</NavLink> 
                        </ul>
                    </div>
                </footer>


            </div>
        </React.Fragment>
    );
}
