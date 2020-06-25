import React from 'react';
import Cover from "../../components/cover/cover.component";
import Aspect from "../../components/aspect/aspect.component";
import Stem from "../../components/stem/stem.component";
import Clients from "../../components/clients/clients.component";

const Home = () => {
    return (
        <>
            <Cover/>
            <Aspect/>
            <Stem/>
            <Clients/>
        </>
    );
};

export default Home;
