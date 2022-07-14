import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from "react-date-range";
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom'

//css files
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../styles/header.scss'

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState('');
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
        room: 1
    });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const navigate = useNavigate()


    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'inc' ?  options[name] + 1 : options[name] - 1
            }
        })
    }

    const handeSearch = () => {
        navigate('/hotels', {state: {destination, date, options}})
    }

    return (
        <header className='header'>
            <div className={type === 'list' ? 'header-container listMode' : 'header-container'}>
                <div className="header-list">
                    <div className="header-list__item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list__item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list__item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>
                    <div className="header-list__item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list__item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' &&
                <>
                    <h1 className='header-title'>Book something for yourself</h1>
                    <p className='header-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci atque autem beatae corporis culpa distinctio eos esse facilis libero, magni, molestiae nemo nostrum officia omnis quos, rem repudiandae soluta.</p>
                    <button className="header-button">
                        Sign in / Register
                    </button>
                    <div className="header-search">
                        <div className="header-search__item">
                            <FontAwesomeIcon icon={faBed} className='header-icon'/>
                            <input
                                type="text"
                                placeholder='Where are you going?'
                                className='header-search__input'
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="header-search__item">
                            <FontAwesomeIcon icon={faCalendarDays} className='header-icon'/>
                            <span className='header-search__text' onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                            </span>
                            {openDate &&
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date-range'
                                    minDate={new Date()}
                                />}
                        </div>
                        <div className="header-search__item">
                            <FontAwesomeIcon icon={faPerson} className='header-icon'/>
                            <span className='header-search__text' onClick={() => setOpenOptions(!openOptions)}>
                            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                        </span>
                            {openOptions &&
                                <div className='options' >
                                    <div className="options__item">
                                        <span className="options__text" >Adult</span>
                                        <div className="options-counter">
                                            <button className="options__button" disabled={options.adult < 1} onClick={() => handleOption('adult', 'dec')}>-</button>
                                            <span className='options__number'>{options.adult}</span>
                                            <button className="options__button" onClick={() => handleOption('adult', 'inc')}>+</button>
                                        </div>
                                    </div>
                                    <div className="options__item">
                                        <span className="options__text">Children</span>
                                        <div className="options-counter">
                                            <button className="options__button" disabled={options.children < 1} onClick={() => handleOption('children', 'dec')}>-</button>
                                            <span className='options__number'>{options.children}</span>
                                            <button className="options__button" onClick={() => handleOption('children', 'inc')}>+</button>
                                        </div>
                                    </div>
                                    <div className="options__item">
                                        <span className="options__text">Room</span>
                                        <div className="options-counter">
                                            <button className="options__button" disabled={options.room < 1} onClick={() => handleOption('room', 'dec')}>-</button>
                                            <span className='options__number'>{options.room}</span>
                                            <button className="options__button" onClick={() => handleOption('room', 'inc')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="header-search__item">
                            <button className="header-button" onClick={handeSearch}>Search</button>
                        </div>
                    </div>
                </>
                }
            </div>
        </header>
    );
};

export default Header;
