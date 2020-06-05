import React from 'react'
import {Button} from 'react-bootstrap'

const NavButton = (props) =>{
    return(
    <Button variant="primary" onClick={props.onButtonClick}>{props.value}</Button>
    );
}

export default NavButton;