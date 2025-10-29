import React, { useState, useEffect } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopExit from "../popups/PopExit/PopExit";
import SContainer from "../Container.styled";
import { SHeader, SHeaderBlock, SHeaderNav, SHeaderBtnNew, SHeaderUserLink, SHeaderLogo, SHeaderLogoWrapper } from './Header.styled';
import { Link } from "react-router-dom";

function Header({ isDarkTheme, onLogout } ) {

    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isExitOpen, setIsExitOpen] = useState(false);
    const [userName, setUserName] = useState("");

    const handleUserClick = () => setIsUserOpen(prev => !prev);
    const handleLogoutConfirm = () => {
        setIsExitOpen(true);
        setIsUserOpen(false);
    };
    const handleExit = () => {
        onLogout();
        setIsExitOpen(false);
    };

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (userInfo && userInfo.user && userInfo.user.name) {
            setUserName(userInfo.user.name);
        } else if (userInfo && userInfo.name) {
            setUserName(userInfo.name);
        } else {
            setUserName("Пользователь");
        }
    }, []);

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
                        {userName}
                        </SHeaderUserLink>
                        <PopUser
                            isOpen={isUserOpen}
                            onClose={() => setIsUserOpen(false)}
                            onRequestExit={handleLogoutConfirm}
                        />
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