import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import HeaderNav from './HeaderNav';
import FooterNav from './FooterNav';
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function Layout() {
    const classes = useStyles();
    const contentStyle = {
        background: "rgba(255,255,255,0)",
        top: "0",
        width: "100%",
        border: "none"
    };

    return (
        <React.Fragment>
            <div >
                <HeaderNav />
                <MobileMenu/>
                <FooterNav />
            </div>
        </React.Fragment>
    );
}