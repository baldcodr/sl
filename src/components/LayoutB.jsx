import React from 'react';
import Popup from "reactjs-popup";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import HeaderNavB from './HeaderNavB';
import FooterNavB from './FooterNavB';
import BurgerIcon from "./BurgerIcon";
import Menu from "./menu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function LayoutB() {
    const classes = useStyles();
    const contentStyle = {
        background: "rgba(255,255,255,0)",
        top: "0",
        width: "100%",
        border: "none"
    };

    return (
        <React.Fragment >
            <div >
                <HeaderNavB />
                <Popup
                    modal
                    className="menu-open"
                    overlayStyle={{ background: "rgba(255,255,255,0.99" }}
                    closeOnDocumentClick={false}
                    contentStyle={contentStyle}
                    trigger={open => <BurgerIcon className="hide-on-large-only" open={open} />}
                >
                    {close => <Menu className="hide-on-large-only" close={close} />}
                </Popup>
                <FooterNavB />
            </div>
        </React.Fragment>
    );
}