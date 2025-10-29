import React, { useEffect, useState } from "react";
import { SPopUserSet, SPopUserSetName, SPopUserSetMail, SPopUserSetTheme } from "./PopUser.styled"

function PopUser({ isOpen, onClose, onRequestExit }) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        if (isOpen) {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (userInfo) {
                setUserName(userInfo.user?.name || userInfo.name || "Пользователь");
                setUserEmail(userInfo.user?.login || userInfo.login || "—");
            }
        }
    }, [isOpen]);


    if (!isOpen) return null;

    return (
        <SPopUserSet>
            <SPopUserSetName>{userName}</SPopUserSetName>
            <SPopUserSetMail>{userEmail}</SPopUserSetMail>
            <SPopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </SPopUserSetTheme>
            <button type="button" onClick={onRequestExit}>
                Выйти
            </button>
        </SPopUserSet>
    );
}

export default PopUser;