import React from 'react';
import {ClientsHeader, ClientsWrapper} from "./client.style";
import ClientRoll from "../client-roll/client-roll.component";


const Clients = () => {
    return (
        <ClientsWrapper>
            <ClientsHeader>Clients</ClientsHeader>
            <ClientRoll/>
        </ClientsWrapper>
    );
};

export default Clients;
