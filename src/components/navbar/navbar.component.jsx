import React from 'react';
import {MenuContainer, MenuItem, NavBarWrapper, NavBrand} from "./navbar.style";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavBrand>
                StartersTech
            </NavBrand>
            <MenuContainer>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    Services
                </MenuItem>
                <MenuItem>
                    Join Us
                </MenuItem>
                <MenuItem>
                    Contact Us
                </MenuItem>
            </MenuContainer>
        </NavBarWrapper>
    );
};

export default NavBar;
