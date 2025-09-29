import React from "react";

function Calendar() {
    return (
        <div className="pop-new-card__calendar">
        <div className="calendar">
            <div className="calendar__head">
            <p>Октябрь 2023</p>
            </div>
            <div className="calendar__body">
            <div className="calendar__row">
                <div className="calendar__col">Пн</div>
                <div className="calendar__col">Вт</div>
                <div className="calendar__col">Ср</div>
                <div className="calendar__col">Чт</div>
                <div className="calendar__col">Пт</div>
                <div className="calendar__col">Сб</div>
                <div className="calendar__col">Вс</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col _disabled">25</div>
                <div className="calendar__col _disabled">26</div>
                <div className="calendar__col _disabled">27</div>
                <div className="calendar__col _disabled">28</div>
                <div className="calendar__col _disabled">29</div>
                <div className="calendar__col _disabled">30</div>
                <div className="calendar__col">1</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col">2</div>
                <div className="calendar__col">3</div>
                <div className="calendar__col">4</div>
                <div className="calendar__col">5</div>
                <div className="calendar__col">6</div>
                <div className="calendar__col">7</div>
                <div className="calendar__col">8</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col">9</div>
                <div className="calendar__col">10</div>
                <div className="calendar__col">11</div>
                <div className="calendar__col">12</div>
                <div className="calendar__col">13</div>
                <div className="calendar__col">14</div>
                <div className="calendar__col">15</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col">16</div>
                <div className="calendar__col">17</div>
                <div className="calendar__col">18</div>
                <div className="calendar__col">19</div>
                <div className="calendar__col">20</div>
                <div className="calendar__col">21</div>
                <div className="calendar__col">22</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col">23</div>
                <div className="calendar__col">24</div>
                <div className="calendar__col">25</div>
                <div className="calendar__col">26</div>
                <div className="calendar__col">27</div>
                <div className="calendar__col">28</div>
                <div className="calendar__col">29</div>
            </div>
            <div className="calendar__row">
                <div className="calendar__col">30</div>
                <div className="calendar__col">31</div>
                <div className="calendar__col _disabled">1</div>
                <div className="calendar__col _disabled">2</div>
                <div className="calendar__col _disabled">3</div>
                <div className="calendar__col _disabled">4</div>
                <div className="calendar__col _disabled">5</div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Calendar;
