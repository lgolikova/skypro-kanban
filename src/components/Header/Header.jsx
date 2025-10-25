import React, { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopExit from "../popups/PopExit/PopExit";
import SContainer from "../Container.styled";
import { SHeader, SHeaderBlock, SHeaderNav, SHeaderBtnNew, SHeaderUserLink, SHeaderLogo, SHeaderLogoWrapper } from './Header.styled';
import { Link } from "react-router-dom";

function Header({ isDarkTheme, onLogout } ) {

    const [isUserOpen, setIsUserOpen] = useState(false);

    const handleUserClick = () => setIsUserOpen((prev) => !prev);


    return (
        <SHeader>
            <SContainer>
                <SHeaderBlock>
                    <SHeaderLogoWrapper isVisible={!isDarkTheme}>
                        <Link to="/">
                            <SHeaderLogo src="images/logo.png" alt="logo" />
                        </Link>
                    </SHeaderLogoWrapper>
                    <SHeaderLogoWrapper isVisible={isDarkTheme}>
                        <Link to="/">
                            <SHeaderLogo src="images/logo_dark.png" alt="logo" />
                        </Link>
                    </SHeaderLogoWrapper>

                    <SHeaderNav>
                        <SHeaderBtnNew>
                            <Link to={`/new`} style={{ textDecoration: "none" }}>Создать новую задачу</Link>
                        </SHeaderBtnNew>
                        <SHeaderUserLink onClick={handleUserClick}>
                            Ivan Ivanov
                        </SHeaderUserLink>
                        <PopUser isOpen={isUserOpen} onLogout={onLogout} onClose={() => setIsUserOpen(false)}/>
                        <PopExit />
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
        </SHeader>
    );
}

export default Header;