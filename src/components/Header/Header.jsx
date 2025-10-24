import React, { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopExit from "../popups/PopExit/PopExit";
import SContainer from "../Container.styled";
import { SHeader, SHeaderBlock, SHeaderNav, SHeaderBtnNew, SHeaderUserLink, SHeaderLogo, SHeaderLogoWrapper } from './Header.styled';
import { Link } from "react-router-dom";

function Header({ isDarkTheme }) {

    const [isUserOpen, setIsUserOpen] = useState(false);

    const handleUserClick = () => {
        setIsUserOpen(!isUserOpen);
    };


    return (
        <SHeader>
            <SContainer>
                <SHeaderBlock>
                    <SHeaderLogoWrapper isVisible={!isDarkTheme}>
                        <a href="/" target="_self">
                            <SHeaderLogo src="images/logo.png" alt="logo" />
                        </a>
                    </SHeaderLogoWrapper>
                    <SHeaderLogoWrapper isVisible={isDarkTheme}>
                        <a href="/" target="_self">
                            <SHeaderLogo src="images/logo_dark.png" alt="logo" />
                        </a>
                    </SHeaderLogoWrapper>

                    <SHeaderNav>
                        <SHeaderBtnNew>
                        {/* <a href="#popNewCard">Создать новую задачу</a> */}
                        <Link to={`/new`} style={{ textDecoration: "none" }}>Создать новую задачу</Link>
                        </SHeaderBtnNew>
                        <SHeaderUserLink href="#user-set-target" onClick={handleUserClick}>
                        Ivan Ivanov
                        </SHeaderUserLink>
                        <PopUser isOpen={isUserOpen} />
                        <PopExit />
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
        </SHeader>
    );
}

export default Header;