import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PreferenciasEntrenamiento = () => {
  return (
    <div>
      <label htmlFor="preferencias">Preferencias de Entrenamiento:</label>
      <Field as="select" name="preferencias">
        <option value="">Selecciona...</option>
        <option value="Yoga">Yoga</option>
        <option value="Cardio">Cardio</option>
        <option value="Musculación">Musculación</option>
      </Field>
      <ErrorMessage name="preferencias" component="div" />
    </div>
  );
};

export default PreferenciasEntrenamiento;
