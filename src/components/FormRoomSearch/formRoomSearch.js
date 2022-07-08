import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from "react-router-dom";
import '../../assets/css/FormRoomSearch.css'

function FormRoomSearch() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="container-FormRoomSearch">
                <div className="container_input-FormRoomSearch">

                    <label className="label_input-FormRoomSearch" for="admission_date">Fecha ingreso</label>
                    <div className="input-FormRoomSearch">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            id="admission_date"
                            className="input_FormRoomSearch"
                        />
                        <label for="admission_date" className="icon-input_FormRoomSearch"><i class="fa-solid fa-calendar-day"></i></label>
                    </div>
                </div>

                <div className="container_input-FormRoomSearch">
                    <label className="label_input-FormRoomSearch" for="departure_date">Fecha salida</label>
                    <div className="input-FormRoomSearch">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            id="departure_date"
                            className="input_FormRoomSearch"
                        />
                        <label for="departure_date" className="icon-input_FormRoomSearch"><i class="fa-solid fa-calendar-week"></i></label>
                    </div>
                </div>

                <div className="container_input-FormRoomSearch">
                    <label className="label_input-FormRoomSearch">Huéspedes</label>
                    <div className="input-FormRoomSearch">
                        <input type="number" id="guests" name="Name" className="input_FormRoomSearch input_FormRoomSearch-dos" placeholder="" />
                        <label for="guests" className="icon-input_FormRoomSearch icon-input_FormRoomSearch-dos"><i class="fa-solid fa-users"></i></label>
                    </div>
                </div>

                <div className="container_input-FormRoomSearch">
                    <label className="label_input-FormRoomSearch">Camas</label>
                    <div className="input-FormRoomSearch">
                        {/* <input type="select" id="room" name="room" className="input_FormRoomSearch input_FormRoomSearch-dos" placeholder=""/> */}
                        <select name="room" id="room" required="" className="input_FormRoomSearch input_FormRoomSearch-dos input_FormRoomSearch-select">
                            <option value=""></option>
                            <option value="una" >1 cama</option>
                            <option value="dos">2 camas</option>
                            <option value="tres">3 camas</option>
                            <option value="cuatro">4 camas</option>
                            <option value="cinco">5 camas</option>
                        </select>
                        <label for="room" className="icon-input_FormRoomSearch icon-input_FormRoomSearch-dos"><i class="fa-solid fa-bed"></i></label>
                    </div>


                </div>
                
                <Link to="/formaliz"><div className="Button_FormRoomSearch">Buscar</div></Link>

            </div>
        </>
    );
};

export default FormRoomSearch