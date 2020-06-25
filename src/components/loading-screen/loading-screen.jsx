import React from 'react';
import {LoaderOne, LoaderTwo, LoaderWrapper} from "./loading-screen.style";

const LoadingScreen = () => {
    return (
        <LoaderWrapper>
            <LoaderOne/>
            <LoaderTwo/>
        </LoaderWrapper>
    );
};

export default LoadingScreen;
