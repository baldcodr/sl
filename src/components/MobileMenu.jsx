import React from 'react';
import Popup from "reactjs-popup";
import { makeStyles } from "@material-ui/core/styles";
import BurgerIcon from "./BurgerIcon";
import Menu from "./menu";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
}));

export default function MobileMenu() {
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
                <Popup
                    modal
                    className="menu-open"
                    overlayStyle={{ background: "rgba(255,255,255,0.99" }}
                    closeOnDocumentClick={true}
                    contentStyle={contentStyle}
                    trigger={open => <BurgerIcon style={{ color: green[100], fontSize: 50 }} className="hide-on-large-only" open={open} />}
                >
                    {close => <Menu className="hide-on-large-only" close={close} />}
                </Popup>
            </div>
        </React.Fragment>
    );
}