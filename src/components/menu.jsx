import React from "react";
import Icon from '@material-ui/core/Icon';
import Social from './SocialB'

export default ({ close }) => (
    <React.Fragment>
        <div className="menu">
            <div className="submenu">
                <nav className="z-depth-0 transparent mobilemenu">
                    <a href="/" className="brand-logo center"><img
                        src="https://res.cloudinary.com/sl-asset/image/upload/v1591820610/sl-asset/SL_Logo-black_jtflgx.png"
                        width="100px" alt="SL logo" /></a>
                    <Icon onClick={close} className="show-on-med-and-down menu-close align-right black-text" style={{ fontSize: 50 }}>more_vert</Icon>
                </nav>

                <div className="menu-list">
                    <a href="/donate" className="white-text"><div className="center donate-btn-menu"> donate</div></a>
                    <ul className="center btn-list">
                        <a href="/music" className="menu-item"><li>music</li></a>
                        <a href="merch" className="menu-item"><li>merch</li></a>
                        <a href="/video" className="menu-item"><li>video</li></a>
                    </ul>
                    <a href="/signup" className="white-text"><div className="center btn-menu white-text">sign up</div></a>
                </div>
            </div>
            
        </div>
        <Social/>
    </React.Fragment>
);