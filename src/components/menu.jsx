import React from "react";
import Icon from '@material-ui/core/Icon';
import Social from './SocialB'
import { NavLink } from "react-router-dom";
import Container from '@material-ui/core/Container';



export default ({ close }) => (
    <React.Fragment>
        <div className="menu">
            <div className="submenu">
                <nav className="z-depth-0 transparent mobilemenu">
                    <NavLink to="/" className="brand-logo center"><img
                        src="https://res.cloudinary.com/sl-asset/image/upload/v1591820610/sl-asset/SL_Logo-black_jtflgx.png"
                        width="100px" alt="SL logo" /></NavLink>
                    <Icon onClick={close} className="show-on-med-and-down menu-close align-right black-text" style={{ fontSize: 50 }}>more_vert</Icon>
                </nav>

                <div className="menu-list">
                    <NavLink to="/donate" className="white-text"><div className="center donate-btn-menu"> donate</div></NavLink>
                    <ul className="center mobile-menu-items">
                        <NavLink to="/music" className="menu-item"><li>music</li></NavLink>
                        <NavLink to="merch" className="menu-item"><li>merch</li></NavLink>
                        <NavLink to="/video" className="menu-item"><li>video</li></NavLink>
                    </ul>
                    <NavLink to="/signup" className="white-text"><div className="center btn-menu white-text">sign up</div></NavLink>
                </div>
            </div>
            
        </div>
        <Social/>
    </React.Fragment>
);