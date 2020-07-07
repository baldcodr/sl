import React from "react";
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

export default ({ open, ...props }) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <Icon className="hide-on-med-and-up menu-open" style={{ fontSize: 50 }}>more_horiz</Icon>
    </div>
);
