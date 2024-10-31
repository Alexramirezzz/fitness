import React from 'react';
import { Field, ErrorMessage } from 'formik';

const DatosPersonales = () => {
  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <Field type="text" name="nombre" placeholder="Introduce tu nombre" />
      <ErrorMessage name="nombre" component="div" style={{ color: 'red' }} />

      <label htmlFor="apellido">Apellido:</label>
      <Field type="text" name="apellido" placeholder="Introduce tu apellido" />
      <ErrorMessage name="apellido" component="div" style={{ color: 'red' }} />
    </div>
  );
};

export default DatosPersonales;
