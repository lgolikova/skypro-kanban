import React, { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopExit from "../popups/PopExit/PopExit";
import SContainer from "../Container.styled";
import { SHeader, SHeaderBlock, SHeaderNav, SHeaderBtnNew, SHeaderUserLink, SHeaderLogo, SHeaderLogoWrapper } from './Header.styled';
import { Link } from "react-router-dom";

function Header({ isDarkTheme, onLogout } ) {

    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isExitOpen, setIsExitOpen] = useState(false);

    const handleUserClick = () => setIsUserOpen(prev => !prev);
    const handleLogoutConfirm = () => {
        setIsExitOpen(true);
        setIsUserOpen(false);
    };
    const handleExit = () => {
        onLogout();
        setIsExitOpen(false);
    };



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
                        <SHeaderUserLink  onClick={handleUserClick}>
                            Ivan Ivanov
                        </SHeaderUserLink>
                        <PopUser
                            isOpen={isUserOpen}
                            onClose={() => setIsUserOpen(false)}
                            onRequestExit={handleLogoutConfirm}
                        />
                        {/* <PopExit
                            isOpen={isExitOpen}
                            onCancel={() => setIsExitOpen(false)}
                            onConfirm={handleExit}
                            /> */}
                    </SHeaderNav>
                </SHeaderBlock>
                <PopExit
                        isOpen={isExitOpen}
                        onCancel={() => setIsExitOpen(false)}
                        onConfirm={handleExit}
                        />
            </SContainer>
        </SHeader>
    );
}

export default Header;