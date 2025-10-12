import React from "react";
import {SPopExit, SPopExitContainer, SPopExitBlock, SPopExitTtl, SPopExitFormGroup, SPopExitYes, SPopExitNo} from './PopExit.styled';

function PopExit() {
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
                                <a href="modal/signin.html">Да, выйти</a>
                            </SPopExitYes>
                            <SPopExitNo id="exitNo">
                                <a href="main.html">Нет, остаться</a>
                            </SPopExitNo>
                        </SPopExitFormGroup>
                    </form>
                </SPopExitBlock>
            </SPopExitContainer>
        </SPopExit>
    );
}

export default PopExit;



