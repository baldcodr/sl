import React, { useState } from 'react';
// import { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Lines from '../components/Lines';
import Social from '../components/Social';
import HeaderNav from '../components/HeaderNav';
import FooterNav from '../components/FooterNav';
import MobileMenu from "../components/MobileMenu";
import StripeCheckout from "react-stripe-checkout";
import FlipButton from '../components/FlipButton';



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '100%',
        height: '100%',
        opacity: '0.2',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Donate() {
    const classes = useStyles();
    const [amount, setAmount] = useState("");

    // const divRef = useRef(null);

    // useEffect(() => {
    //     divRef.current.scrollIntoView({ behavior: 'smooth' });
    // }); 

    const handleToken = token => {
        const body = {
            token
        }

        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:4242/donate`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE ", response)
            const { status } = response
            console.log("STATUS ", status)
        })
        .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            <Lines />
            <div class="donate-bgd">
                <HeaderNav />
                <MobileMenu />
           </div>
            <img id="donate-bg" className="hide-on-med-and-down" loop="true" autoPlay="true" 
                src="https://media.giphy.com/media/QAVXTGHPJrNrUHwYMX/giphy.gif" alt="sl donate dekstop" />
            {/* <div >
                <img id="donate-bgd" src="https://res.cloudinary.com/sl-asset/image/upload/v1593708246/sl-asset/donate-bgd_h8ttvf.png" alt="sl donate mobile" />
            </div> */}
            <Lines />
            <FlipButton />
            <div className="donate-main">
                <Container maxWidth="xs" className='donate-container'>
                    <div className="donate-title">sl community project</div>
                    <div className={classes.content}>
                        <p className="donate-details">
                            harlee milne aka sl has pledged a minimum donation of £100,000 from his personal income for charitable causes that will empower today’s youth.
                            starting with his local community in london, and extending to his grandparent’s local community in nigeria.</p>
                        <p className="donate-details">to apply for a grant please click to apply</p>
                        <br />
                        <a href='https://officialsl-video.s3.eu-west-2.amazonaws.com/SL+Community+Projects.pdf' target="_blank"><div className={classes.modal}><div className="center donate-button"> APPLY</div></div></a>
                    </div>
                </Container>
                <Container maxWidth="xs" className='donate-container'>
                    <div className="donate-title">donations</div>
                    <div className={classes.content}>
                        <p className="donate-details">we appreciate your support of the sL community projects and our mission to make a change and empower
                        to youth of today &amp; tomorrow. to keep fuelling this movement we are accepting any donations that want to be made.</p>
                        <br />
                        <input
                            type="number"
                            placeholder=" enter the amount"
                            name="donation"
                            id="donation"
                            className="donate-button"
                            inputmode="numeric"
                            min="0"
                            value={amount}
                            validation
                            onChange={event => setAmount(event.target.value)}
                        />
                        <StripeCheckout
                            stripeKey={process.env.REACT_APP_SLKEY}
                            token={handleToken}
                            name="SL Project Donation"
                            panelLabel="DONATE"
                            currency="GBP"
                            amount={Number(amount) * 100}>
                        <button type="submit" value="" name="" id="" className="center donate-button">MAKE A DONATION</button>
                        </StripeCheckout>
                    </div>
                </Container>
                {/* <div ref={divRef} ></div> */}
            </div >
            <FooterNav/>
            <div className="hide-on-med-and-down"><Social /></div>
       </React.Fragment>
    );
}
