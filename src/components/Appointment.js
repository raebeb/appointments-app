import React from 'react'

const Appointment = ({appointment, deleteAppointment}) => (
    <div className="cita">
        <p>Mascota: <span>{appointment.pet}</span> </p>
        <p>propietario: <span>{appointment.owner}</span> </p>
        <p>fecha: <span>{appointment.discharge_date}</span> </p>
        <p>hora: <span>{appointment.discharge_time}</span> </p>
        <p>sintomas: <span>{appointment.symptoms}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={() => deleteAppointment(appointment.id)}
        >
            Eliminar &times;
        </button>
    </div>
)

export default Appointment