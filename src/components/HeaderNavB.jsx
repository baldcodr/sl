import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';



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
    }
}));

export default function HeadNavB() {
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
                                    color: "#e5f31a"
                                }}>MUSIC</NavLink>
                        </ul>
                    </div>
                    <div className="col s12 m4 l8">
                        <nav className="z-depth-0 transparent">
                            <a href="/home" className="brand-logo center"><img
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1591820610/sl-asset/SL_Logo-black_jtflgx.png"
                                width="115px" alt="SL logo" /></a>
                        </nav>
                    </div>
                    <div className="col s12 m4 l2">
                        <ul className="right hide-on-med-and-down z-depth-0">
                            <NavLink
                                to="/donate"
                                className={classes.navlink}
                                activeStyle={{
                                    color: "#e5f31a"
                                }}>DONATE</NavLink> 
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
