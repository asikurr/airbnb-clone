import React ,{useState}from 'react';
import './srearch-style.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker}  from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People';
import {Button} from '@material-ui/core'

const SearchDate = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelection = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        // console.log(ranges)
    }
    return (
        <div className="searchDate">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelection}/>
            <h2>Number of guesses <PeopleIcon/></h2>
            <input min={0} defaultValue={2} type="number"/>
            <Button>Search Airbnb</Button>
        </div>
    );
};

export default SearchDate;