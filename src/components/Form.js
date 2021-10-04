import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre Dueño"
        />

        <label>Fecha de alta</label>
        <input type="date" name="fecha de alta" className="u-full-width" />

        <label>Hora de alta</label>
        <input
            type="time"
            name="hora de alta"
            className="u-full-width" />

        <label>Fecha de alta</label>
        <textarea
            className="u-full-width"
        ></textarea>

        <button
            type="submit"
            className="u-full-width button-primary"
        >
            Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
