import React from "react";
import {SPopExit, SPopExitContainer, SPopExitBlock, SPopExitTtl, SPopExitFormGroup, SPopExitYes, SPopExitNo} from './PopExit.styled';

function PopExit({ isOpen, onCancel, onConfirm }) {
    if (!isOpen) return null;

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
                                <a onClick={onConfirm}>Да, выйти</a>
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



