import React, { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import PopExit from "../popups/PopExit/PopExit";
import SContainer from "../Container.styled";
import { SHeader, SHeaderBlock, SHeaderNav, SHeaderBtnNew, SHeaderUserLink } from './Header.styled';


function Header() {

    const [isUserOpen, setIsUserOpen] = useState(false);

    const handleUserClick = () => {
        setIsUserOpen(!isUserOpen);
    };

    return (
        <SHeader>
            <SContainer>
                <SHeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="/" target="_self">
                        <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="/" target="_self">
                        <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>

                    <SHeaderNav>
                        <SHeaderBtnNew>
                        <a href="#popNewCard">Создать новую задачу</a>
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