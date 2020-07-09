import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
// import Donate from './Donate'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '0',
    },
    backdrop: {
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
    },
    paper: {
        
        width: '83.11%',
        paddingTop: '100px',
        height: '100%',
        border: '0px solid #000',
        padding: 2,
        zIndex: '999999'
    },
    mail: {
        color: 'yellow'
    },
    content: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
    },
    navlink: {
        fontFamily: 'Druk Text Wide Bold Italic',
        color: 'white',
        fontSize: '10px',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    }
}));

export default function HeaderNav() {
    const classes = useStyles();
    return (
        <div>
            <header className="page-header transparent">
                <div className="row">
                    <div className="col s12 m4 l2">
                        <ul className="left hide-on-med-and-down z-index-0">
                            <NavLink
                                to="/music"
                                className={classes.navlink}
                                activeStyle={{
                                    color: "yellow"
                                }}>MUSIC</NavLink> 
                        </ul>
                    </div>
                    <div className="col s12 m4 l8">
                        <nav className="z-depth-0 transparent">
                            <a href="/" className="brand-logo center"><img
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1591801888/sl-asset/SL_Logo-1_1_snvdkr.png"
                                width="115px" alt="SL logo" /></a>
                        </nav>
                    </div>
                    <div className="col s12 m4 l2">
                        <ul className="right hide-on-med-and-down z-depth-0">
                            <NavLink
                                to="/donate"
                                className={classes.navlink}
                                activeStyle={{
                                color: "yellow"
                            }}>DONATE</NavLink> 
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
