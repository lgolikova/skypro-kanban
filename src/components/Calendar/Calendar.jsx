import React from "react";
import {
    SCalendar,
    SCalendarTitle,
    SCalendarBlock,
    SCalendarNav,
    SCalendarMonth,
    SNavActions,
    SNavAction,
    SCalendarContent,
    SCalendarDaysNames,
    SCalendarDayName,
    SCalendarCells,
    SCalendarCell,
    SCalendarPeriod,
    } from "./Calendar.styled";

    function Calendar() {
    return (
        <SCalendar>
        <SCalendarTitle>Даты</SCalendarTitle>

        <SCalendarBlock>
            <SCalendarNav>
            <SCalendarMonth>Сентябрь 2023</SCalendarMonth>
            <SNavActions>
                <SNavAction data-action="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                    <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
                </SNavAction>
                <SNavAction data-action="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                    <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
                </SNavAction>
            </SNavActions>
            </SCalendarNav>

            <SCalendarContent>
            <SCalendarDaysNames>
                <SCalendarDayName>пн</SCalendarDayName>
                <SCalendarDayName>вт</SCalendarDayName>
                <SCalendarDayName>ср</SCalendarDayName>
                <SCalendarDayName>чт</SCalendarDayName>
                <SCalendarDayName>пт</SCalendarDayName>
                <SCalendarDayName weekend>сб</SCalendarDayName>
                <SCalendarDayName weekend>вс</SCalendarDayName>
            </SCalendarDaysNames>

            <SCalendarCells>
                <SCalendarCell other>28</SCalendarCell>
                <SCalendarCell other>29</SCalendarCell>
                <SCalendarCell other>30</SCalendarCell>
                <SCalendarCell>31</SCalendarCell>
                <SCalendarCell>1</SCalendarCell>
                <SCalendarCell weekend>2</SCalendarCell>
                <SCalendarCell weekend>3</SCalendarCell>
                <SCalendarCell>4</SCalendarCell>
                <SCalendarCell>5</SCalendarCell>
                <SCalendarCell>6</SCalendarCell>
                <SCalendarCell>7</SCalendarCell>
                <SCalendarCell current>8</SCalendarCell>
                <SCalendarCell weekend>9</SCalendarCell>
                <SCalendarCell weekend>10</SCalendarCell>
                <SCalendarCell>11</SCalendarCell>
                <SCalendarCell>12</SCalendarCell>
                <SCalendarCell>13</SCalendarCell>
                <SCalendarCell>14</SCalendarCell>
                <SCalendarCell>15</SCalendarCell>
                <SCalendarCell weekend>16</SCalendarCell>
                <SCalendarCell weekend>17</SCalendarCell>
                <SCalendarCell>18</SCalendarCell>
                <SCalendarCell>19</SCalendarCell>
                <SCalendarCell>20</SCalendarCell>
                <SCalendarCell>21</SCalendarCell>
                <SCalendarCell>22</SCalendarCell>
                <SCalendarCell weekend>23</SCalendarCell>
                <SCalendarCell weekend>24</SCalendarCell>
                <SCalendarCell>25</SCalendarCell>
                <SCalendarCell>26</SCalendarCell>
                <SCalendarCell>27</SCalendarCell>
                <SCalendarCell>28</SCalendarCell>
                <SCalendarCell>29</SCalendarCell>
                <SCalendarCell weekend>30</SCalendarCell>
                <SCalendarCell other weekend>1</SCalendarCell>
            </SCalendarCells>
            </SCalendarContent>

            <SCalendarPeriod>
            <p>
                Выберите срок исполнения: <span>08.09.2023</span>
            </p>
            </SCalendarPeriod>
        </SCalendarBlock>
        </SCalendar>
    );
}

export default Calendar;
