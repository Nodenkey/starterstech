import React from 'react';
import {
    AspectCard, AspectCardWrapper, AspectHeader,
    AspectWrapper, Clipper, Clipper2,
    ImageContainer,
} from "./aspect.style";
import Camp from "../../assets/images/camp.jpg";
import School from "../../assets/images/school.jpg";
import Stem from "../../assets/images/stem.jpg";
import Read from "../../assets/images/read2.jpg";


const Aspect = () => {

    return (
        <>
            <Clipper/>
            <Clipper2/>
            <AspectHeader>What we offer</AspectHeader>
            <AspectWrapper>
                <AspectCardWrapper>
                    <ImageContainer style={{backgroundImage: `url(${School})`}}/>
                    <AspectCard>After School
                        Coding, Electronics and Robotics</AspectCard>
                </AspectCardWrapper>
                <AspectCardWrapper>
                    <ImageContainer style={{backgroundImage: `url(${Camp})`}}/>
                    <AspectCard>Technology Camps
                        focusing on future careers</AspectCard>
                </AspectCardWrapper>
                <AspectCardWrapper>
                    <ImageContainer style={{backgroundImage: `url(${Read})`}}/>
                    <AspectCard>NEXGEN STORIES;
                        STEM education through stories</AspectCard>
                </AspectCardWrapper>
                <AspectCardWrapper>
                    <ImageContainer style={{backgroundImage: `url(${Stem})`}}/>
                    <AspectCard>STEM education services
                        for schools, organizations, communities and homes</AspectCard>
                </AspectCardWrapper>
            </AspectWrapper>
        </>
    );
};

export default Aspect;