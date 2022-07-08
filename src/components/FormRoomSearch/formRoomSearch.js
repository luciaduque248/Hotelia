import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import '../../assets/css/FormRoomSearch.css'

function FormRoomSearch() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="container-FormRoomSearch">
                <div className="container_input-FormRoomSearch">
                    <h1 className="text_input-FormRoomSearch">Fecha ingreso</h1>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                </div>
                <div className="container_input-FormRoomSearch">
                <h1 className="text_input-FormRoomSearch">Fecha salida</h1>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                </div>
            </div>
        </>
    );
};

export default FormRoomSearch