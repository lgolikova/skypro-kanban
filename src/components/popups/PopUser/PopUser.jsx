import React from "react";
import { SPopUserSet, SPopUserSetName, SPopUserSetMail, SPopUserSetTheme } from "./PopUser.styled"

function PopUser({ onLogout, isOpen, onClose }) {
    // if (!isOpen) return null;

    return (
        <SPopUserSet style={{ display: isOpen ? "block" : "none" }}>
            <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
            <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
            <SPopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </SPopUserSetTheme>
            <button type="button" onClick={() => { onLogout(); onClose(); }}>
                Выйти
            </button>
        </SPopUserSet>
    );
}

export default PopUser;