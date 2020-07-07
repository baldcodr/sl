import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';


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
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <header className="page-header transparent">
                <div className="row">

                    <div className="col s12 m4 l2">
                        <ul className="left hide-on-med-and-down z-index-0">
                            <li><a className="black-text" href="/music">MUSIC</a></li>
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
                            {/* <li><a className="black-text" href="#" onClick={handleOpen}>DONATE</a></li> */}
                            <li><a className="black-text" href="/donate">DONATE</a></li>
                        </ul>
                    </div>
                </div>
            </header>


            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <div className={classes.paper}>
                    <div className={classes.content}>
                        <div className="center donate"><a href="/"><img className="donate-img" src="https://res.cloudinary.com/sl-asset/image/upload/v1593320465/sl-asset/DONATE_rcnqsq.png" /></a></div>
                        <p className="center donate">harlee milne aka sl has pledged a minimum donation of £100k from his personal income for charitable causes that will empower today’s youth.</p>
                        <p className="center donate">starting with his local community in london, and extending to his grandparent’s local community in nigeria.</p>
                        <p className="center donate">for more info please contact: <a className={classes.mail}>info<text className="symbol">&#64;</text>officialsl.co.uk</a></p>
                        <br />
                        <br />
                        <div className={classes.modal}><div className="center donate donate-btn"> MAKE A DONATION</div></div>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}
