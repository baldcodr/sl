import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function FooterNavB() {
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
                                    color: "yellow"
                                }}>MERCH</NavLink>                         </ul>
                    </div>
                
                    <div className="footer-right hide-on-med-and-down z-depth-0">
                        <ul >
                            <NavLink
                                to="/video"
                                className={classes.navlink}
                                activeStyle={{
                                    color: "yellow"
                                }}>VIDEO</NavLink>                         </ul>
                    </div>
                </footer>


            </div>
        </React.Fragment>
    );
}
