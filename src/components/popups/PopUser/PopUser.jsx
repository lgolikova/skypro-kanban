import React from "react";
import { SPopUserSet, SPopUserSetName, SPopUserSetMail, SPopUserSetTheme } from "./PopUser.styled"

function PopUser({ isOpen }) {
    return (
        <SPopUserSet id="user-set-target" style={{ display: isOpen ? "block" : "none" }}>
            <SPopUserSetName>Ivan Ivanov</SPopUserSetName>
            <SPopUserSetMail>ivan.ivanov@gmail.com</SPopUserSetMail>
            <SPopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </SPopUserSetTheme>
            <button type="button">
                <a href="#popExit">Выйти</a>
            </button>
        </SPopUserSet>
    );
}

export default PopUser;