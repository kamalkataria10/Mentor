import React from 'react';
import classes from './BlankCard.module.css';

const BlankCard = (props) => {
    return (
        <div className={classes.blankcard}>{props.children}</div>
    );
};

export default BlankCard;