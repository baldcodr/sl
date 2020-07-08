import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center"
    }
}));

export default function Social() {
    const classes = useStyles();

    return (
            <footer className="transparent">
                <nav className="footer-center hide-on-meduim-and-up z-depth-0 transparent footer">
                        <ul className="footer">
                            <li><a href="https://music.apple.com/gb/artist/sl/432643700" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661804/sl-asset/apple_lejfbw.png"
                                width="20px"></img></a></li>
                            <li><a href="https://twitter.com/officialsl" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661807/sl-asset/twitter_t5ezyn.png"
                                width="20px"></img></a></li>
                            <li><a href="https://soundcloud.com/sl39269" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661806/sl-asset/soundcloud_jvkjbu.png"
                                width="20px"></img></a></li>
                            <li><a href="https://www.youtube.com/channel/UC16Jppb49O5WW54ZyWnJz_w" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661810/sl-asset/youtube_pbt4tj.png"
                                width="20px"></img></a></li>
                            <li><a href="https://www.instagram.com/officialsl" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661805/sl-asset/instagram_ahlc9k.png"
                                width="20px"></img></a></li>
                            <li><a href="https://open.spotify.com/artist/0wY1K9SgxbaRfoFRmSR5x5?si=-iW9fHtcSheLTMufEstpFQ" className="center"><img className="social"
                                src="https://res.cloudinary.com/sl-asset/image/upload/v1590661807/sl-asset/spotify_s0dlsw.png"
                                width="20px"></img></a></li>
                        </ul>
                    </nav>
            </footer>

    );
}
