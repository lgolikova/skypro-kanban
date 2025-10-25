import React from "react";
import { SPopUserSet, SPopUserSetName, SPopUserSetMail, SPopUserSetTheme } from "./PopUser.styled"

function PopUser({ isOpen, onClose, onRequestExit }) {
    if (!isOpen) return null;

    return (
        <SPopUserSet>
            <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
            <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
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