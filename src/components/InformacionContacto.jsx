import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InformacionContacto = () => {
  return (
    <div>
      <div>
        <label htmlFor="email">Email:</label>
        <Field type="email" name="email" placeholder="Introduce tu email" />
        <ErrorMessage name="email">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>
      </div>

      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <Field type="text" name="telefono" placeholder="Introduce tu teléfono" />
        <ErrorMessage name="telefono">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default InformacionContacto;
