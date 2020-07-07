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
                            <li><a className="black-text" href="/merch">MERCH</a></li>
                        </ul>
                    </div>
                    <div className="footer-center hide-on-small-only">
                        <nav className="z-depth-0 transparent center footer-center">
                            <ul id="">
                                <li><a href="https://music.apple.com/gb/artist/sl/432643700" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/apple-black_lnof8x.png"
                                    width="15px"></img></a></li>
                                <li><a href="https://twitter.com/officialsl" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/twitter-black_xoiadf.png"
                                    width="15px"></img></a></li>
                                <li><a href="https://soundcloud.com/sl39269" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/soundcloud-black_kxfntg.png"
                                    width="15px"></img></a></li>
                                <li><a href="https://www.youtube.com/channel/UC16Jppb49O5WW54ZyWnJz_w" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/youtube-black_ejankf.png"
                                    width="15px"></img></a></li>
                                <li><a href="https://www.instagram.com/officialsl" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/ig-black_n6oz7q.png"
                                    width="15px"></img></a></li>
                                <li><a href="https://open.spotify.com/artist/0wY1K9SgxbaRfoFRmSR5x5?si=-iW9fHtcSheLTMufEstpFQ" className="center"><img className="social"
                                    src="https://res.cloudinary.com/sl-asset/image/upload/v1591380373/sl-asset/spotify-black_aytj8q.png"
                                    width="15px"></img></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-right hide-on-med-and-down z-depth-0">
                        <ul >
                            <li><a className="black-text" href="/video">VIDEO</a></li>
                        </ul>
                    </div>
                </footer>


            </div>
        </React.Fragment>
    );
}
