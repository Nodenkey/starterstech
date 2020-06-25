import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import {Logo, LogoContainer} from "../clients/client.style";


const ClientRoll = () => {
    const images = [
        require("../../assets/images/beanstalk.png"),
        require("../../assets/images/dodi.png"),
        require("../../assets/images/dreamoval.png"),
        require("../../assets/images/gis.png"),
        require("../../assets/images/harvest.png"),
        require("../../assets/images/pumpkins.png"),
        require("../../assets/images/Nouvel-logo-new-300x161.png"),
        require("../../assets/images/vine.png"),
    ];

    const options ={
        loop: true,
        margin: 10,
        items: 4,
        dots: false,
        responsive:{
            0: {
                items: 1.4,
                center: true,
                margin: 10
            },
            768: {
                items: 2.5,
            },
            1000: {
                items: 3.8,
            },
        },
    };
    return (
            <OwlCarousel {...options} className="owl-theme" id="carousel-wrapper">
                {images.map((image, index) => {
                    return <LogoContainer><Logo key={index} src={image} alt="client logo"/></LogoContainer>
                })}
            </OwlCarousel>
    );
};

export default ClientRoll;
