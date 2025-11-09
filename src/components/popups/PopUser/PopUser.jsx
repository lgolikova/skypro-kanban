import React, { useEffect, useState, useContext } from "react";
import { SPopUserSet, SPopUserSetName, SPopUserSetMail, SPopUserSetTheme } from "./PopUser.styled";
import { AuthContext } from "../../../context/AuthContext";

function PopUser({ isOpen, onClose, onRequestExit }) {
    const { user } = useContext(AuthContext);

    if (!isOpen) return null;

    const userName = user?.user?.name || user?.name || "Пользователь";
    const userEmail = user?.user?.login || user?.login || "—";

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