import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import HeaderNav from '../components/HeaderNav';
import FooterNav from '../components/FooterNav';
import MobileMenu from '../components/MobileMenu';
import Lines from '../components/Lines';
import FlipButton from '../components/FlipButton';
import Social from '../components/Social';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black'
    }, modal: {
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
        paddingTop: '50px',
        height: '100%',
        border: '0px solid #000',
        padding: 2,
        zIndex: '999999'
    },
    popup: {
        width: '500px',
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

export default function Music() {
    const [ hidden, setHidden ]   = useState();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Lines />
            <HeaderNav />
            <MobileMenu/>
            <FlipButton />

            {/* <a href="#"><img className="fltbtnmob" src="https://res.cloudinary.com/sl-asset/image/upload/v1591804268/sl-asset/SIGN_BTN_MOB_xqowxr.png" alt="sign up" />
            </a> */}
            <div className="center music">
                <a href="#">
                    <div className="img-card-left">
                        <img className="responsive-img"
                            src="https://res.cloudinary.com/sl-asset/image/upload/v1593968649/sl-asset/MUSIC_PIC_1_ljkyk9.jpg"
                            width="400px" alt="listen to sl music" />

                        <img className="img-top responsive-img"
                            src="https://res.cloudinary.com/sl-asset/image/upload/v1593968643/sl-asset/MUSIC_PIC_2_pqb1tn.jpg"
                            width="400px" alt="listen to sl music" />
                    </div>
                </a>

                <a href="#">
                    <div className="img-card-left">
                        <img className="responsive-img"
                            src="https://res.cloudinary.com/sl-asset/image/upload/v1593297902/sl-asset/MAIN_tftbim.png"
                            width="400px" alt="listen to sl music" />

                        <img className="img-top responsive-img"
                            src="https://res.cloudinary.com/sl-asset/image/upload/v1593297902/sl-asset/MAIN_tftbim.png"
                            width="400px" alt="listen to sl music" />
                    </div>
                </a>
                {/* <div className="img-card">
                    <a href="#"><img className="responsive-img"
                        src="https://res.cloudinary.com/sl-asset/image/upload/v1593297902/sl-asset/MAIN_tftbim.png"
                        width="400px" alt="listen to sl music" /></a>

                </div> */}
            </div>
            {/* <div className="center">
                <p className="live hide-on-small-only" onClick={() => setHidden({ hidden: !hidden })} hidden={hidden}>click here for live dates</p>
            </div> */}
            <div className="center">
                <p className="live" onClick={handleOpen} >click here for live dates</p>
            </div>
            {/* <div className="center scale-transition" hidden={!hidden}>
                <a href="/music">
                    <img className="live-dates"
                        src="https://res.cloudinary.com/sl-asset/image/upload/v1593320465/sl-asset/LIVE_DATES_rwjyi1.png" />
                </a>
                <p className="live-date">no live dates yet</p>
            </div>
            <div className="center hide-on-med-and-up">
                <img className="live-dates" src="https://res.cloudinary.com/sl-asset/image/upload/v1593320465/sl-asset/LIVE_DATES_rwjyi1.png" />
                    <p className="live-date">no live dates yet</p>       
            </div> */}
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <div className={classes.paper}>
                    <div className={classes.content}>
                        <div className={classes.modal}>
                            <img className={classes.popup}
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1593938691/sl-asset/Escape-45_s98nkt.jpg" />
                        </div>
                    </div>
                </div>
            </Backdrop>
            <FooterNav/>
            <div className="footer-music hide-on-med-and-down"><Social/></div>

        </React.Fragment>
    );
}