import React from 'react';

const Resumen = ({ datos }) => {
  return (
    <div>
      <h2>Resumen de Registro</h2>
      <p>Nombre: {datos.nombre}</p>
      <p>Apellido: {datos.apellido}</p>
      <p>Email: {datos.email}</p>
      <p>Teléfono: {datos.telefono}</p>
      <p>Preferencias de Entrenamiento: {datos.preferencias}</p>
    </div>
  );
};

export default Resumen;
