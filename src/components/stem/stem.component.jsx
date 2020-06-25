import React from 'react';
import {
    SectionHeader,
    SectionText,
    SectionTextWrapper,
    SectionWrapper,
    StemHeader,
    StemWrapper, VideoPlayer,
    VideoWrapper
} from "./stem.style";
import Button from "../button/button.component";

const Stem = () => {
    return (
        <StemWrapper>
            <StemHeader>Stem Education</StemHeader>
            <SectionWrapper>
                <SectionTextWrapper>
                    <SectionHeader>After School, Saturdays & Home Tuition</SectionHeader>
                    <SectionText>We provide the best STEM education service in Ghana to schools, communities and homes.
                        With a result oriented, practical and fun approach, our programs are designed to give our
                        students skills in technology that are and will be vital to their society. Our focus is
                        developing the student technologically through STEM education and meeting the expectations of
                        parents. </SectionText>
                    <Button text="Join us"/>
                </SectionTextWrapper>
                <VideoWrapper>
                    <VideoPlayer muted loop allowFullScreen frameBorder="0"
                                 src="https://www.youtube.com/embed/NMcy0TexlxA?controls=1"/>
                </VideoWrapper>
            </SectionWrapper>
            <SectionWrapper>
                <VideoWrapper>
                    <VideoPlayer muted loop allowFullScreen frameBorder="0"
                                 src="https://www.youtube.com/embed/HH2ox0hv6o8?controls=1"/>
                </VideoWrapper>
                <SectionTextWrapper>
                    <SectionHeader>Online Academy</SectionHeader>
                    <SectionText>Join our online community(Go Code) of students learning to code, building smart
                        electronic systems and developing robots. Sign up for our online courses, depending on your age,
                        level and interest and get started. The future is already here and remember, you can learn from
                        anywhere at any time, so get started. Coming Soon …</SectionText>
                    <Button text="Sign up"/>
                </SectionTextWrapper>
            </SectionWrapper>
            <SectionWrapper>
                <SectionTextWrapper>
                    <SectionHeader>Stem storybooks</SectionHeader>
                    <SectionText>Get our science, technology, engineering and math storybooks for your children and see
                        them enjoy education on whole new level. Children reading our stories forget they are learning
                        and have so fun much reading. Our stories have beautiful illustrations to appeal to children and
                        teenagers getting them hooked and enjoying topics they will usually not like in
                        school.</SectionText>
                    <Button text="Order a book"/>
                </SectionTextWrapper>
                <VideoWrapper>
                    <VideoPlayer muted loop allowFullScreen frameBorder="0"
                                 src="https://www.youtube.com/embed/XSsULnGvyHg?controls=1"/>
                </VideoWrapper>
            </SectionWrapper>
        </StemWrapper>
    );
};

export default Stem;
