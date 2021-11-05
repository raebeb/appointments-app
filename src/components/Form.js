import React, { Fragment, useState } from "react";

const Form = () => {
  const [appointment, updateAppointment] = useState({
    pet: "",
    owner: "",
    discharge_date: "",
    discharge_time: "",
    symptoms: "",
  });

  const handleChange = e => {
    updateAppointment({
        ...appointment,
        [e.target.name]: e.target.value
    })
  };

  const {pet, owner, discharge_date, discharge_time, symptoms} = appointment

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha de alta</label>
        <input
          type="date"
          name="discharge_date"
          className="u-full-width"
          onChange={handleChange}
          value={discharge_date}
        />

        <label>Hora de alta</label>
        <input
          type="time"
          name="discharge_time"
          className="u-full-width"
          onChange={handleChange}
          value={discharge_time}
        />

        <label>Sintomas</label>
        <textarea 
            className="u-full-width"
            name="symptoms"
            onChange={handleChange}
            value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
