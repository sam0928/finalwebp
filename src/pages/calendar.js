import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Calendar = () => {
 return(<div>

        <h1>Demo Date</h1>

        <DayPicker
            initialMonth={new Date(2021, 5)}
            selectedDays={[
                new Date(2021, 5, 23),
            ]}
        />

        </div>
    );
}

export default Calendar;