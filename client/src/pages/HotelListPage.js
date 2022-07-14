import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import Header from "../components/Header";

//css files
import '../styles/hotelListPage.scss'
import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchItem from "../components/SearchItem";

const HotelListPage = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(location.state.date);

    return (
        <div className='list'>
            <NavBar/>
            <Header type='list'/>
            <div className="list__container">
                <div className="list__wrapper">
                    <div className="list__search">
                        <h1 className="list__title">Search</h1>
                        <div className="list__item">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="list__item">
                            <label>Check-in Date</label>
                            <span className='check-in' onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                            </span>
                            {openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="list__item">
                            <label>Options</label>
                            <div className="options">
                                <div className="options__item">
                                    <span className="options__item-text">Min price <small>per night</small></span>
                                    <input type="number" className="options__input"/>
                                </div>
                                <div className="options__item">
                                    <span className="options__item-text">Max price <small>per night</small></span>
                                    <input type="number" className="options__input"/>
                                </div>
                                <div className="options__item">
                                    <span className="options__item-text">Adult</span>
                                    <input
                                        min={0}
                                        type="number"
                                        className="options__input"
                                        placeholder={options.adult}/>
                                </div>
                                <div className="options__item">
                                    <span className="options__item-text">Children</span>
                                    <input
                                        min={0}
                                        type="number"
                                        className="options__input"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="options__item">
                                    <span className="options__item-text">Room</span>
                                    <input
                                        min={0}
                                        type="number"
                                        className="options__input"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="list__result">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelListPage;
