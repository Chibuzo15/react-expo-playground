import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import classes from './button.module.css'

const defaultButton = (props) => {
    //{[classes['Button'], classes[props.btnType]].join(' ')}
    return (
        <TouchableOpacity
        onClick={props.handleClick}
        disabled={props.disabled}
        className={[classes['Button'], classes[props.btnType]].join(' ')}>
            {props.children}
        </TouchableOpacity>
    )
}

export default deFaultButton;