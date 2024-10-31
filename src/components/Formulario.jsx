import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatosPersonales from './DatosPersonales';
import InformacionContacto from './InformacionContacto';
import PreferenciasEntrenamiento from './PreferenciasEntrenamiento';
import Resumen from './Resumen';

const Formulario = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({});

  const initialValues = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    preferencias: '',
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Requerido'),
    apellido: Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    telefono: Yup.string().required('Requerido'),
    preferencias: Yup.string().required('Requerido'),
  });

  const manejarEnvio = (values, { setSubmitting }) => {
    alert('¡Registro exitoso! Estás registrado.');
    console.log('Formulario enviado con éxito:', values);
    setFormValues(values); // Guarda los valores del formulario
    setSubmitting(false);
    setSubmitted(true); // Marca el formulario como enviado
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={manejarEnvio}
    >
      {({ isSubmitting }) => (
        <Form>
          <DatosPersonales />
          <InformacionContacto />
          <PreferenciasEntrenamiento />
          <button type="submit" className="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {submitted && <Resumen datos={formValues} />} {/* Pasar los valores al resumen */}
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
