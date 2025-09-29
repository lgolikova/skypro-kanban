import React from "react";

function PopExit() {
    return (
        <div className="header__pop-exit pop-exit" id="popExit">
        <p>Вы точно хотите выйти?</p>
        <div className="pop-exit__buttons">
            <button className="_hover03">Отмена</button>
            <button className="_hover03">Выйти</button>
        </div>
        </div>
    );
}

export default PopExit;