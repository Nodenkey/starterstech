import React from 'react';
import {ButtonWrapper} from "./button.style";

const Button = ({text}) => {
    return (
        <ButtonWrapper>
            {text}
        </ButtonWrapper>
    );
};

export default Button;
