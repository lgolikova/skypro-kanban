import React, { useContext } from "react";
import {SPopExit, SPopExitContainer, SPopExitBlock, SPopExitTtl, SPopExitFormGroup, SPopExitYes, SPopExitNo} from './PopExit.styled';
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function PopExit({ isOpen, onCancel }) {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleConfirm = () => {
        logout();
        navigate("/login");
    };

    return (
        <SPopExit id="popExit">
            <SPopExitContainer>
                <SPopExitBlock>
                    <SPopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </SPopExitTtl>
                    <form id="formExit" action="#">
                        <SPopExitFormGroup>
                            <SPopExitYes id="exitYes">
                                <a onClick={handleConfirm}>Да, выйти</a>
                            </SPopExitYes>
                            <SPopExitNo id="exitNo">
                                <a onClick={onCancel}>Нет, остаться</a>
                            </SPopExitNo>
                        </SPopExitFormGroup>
                    </form>
                </SPopExitBlock>
            </SPopExitContainer>
        </SPopExit>
    );
}

export default PopExit;



