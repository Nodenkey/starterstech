import React from 'react';
import {CoverMainText, CoverText, CoverTextWrapper, CoverWrapper, ImageWrapper} from "./cover.style";
import Button from "../button/button.component";
import {CoverBoy} from "../icons/icons.component";

const Cover = () => {
    return (
        <CoverWrapper>
            <CoverTextWrapper>
                <CoverMainText>STEM education inline with evolving career demands</CoverMainText>
                <CoverText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque doloribus dolorum,
                    error ipsa maiores nulla possimus, praesentium quae quam quas rem, sed sint.</CoverText>
                <Button text="Join us"/>
            </CoverTextWrapper>
            <ImageWrapper>
                <CoverBoy/>
            </ImageWrapper>
        </CoverWrapper>
    );
};

export default Cover;
