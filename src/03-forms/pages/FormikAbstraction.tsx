import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckBox } from '../components';

import '../styles/styles.css'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Tiene que tener 15 caracteres o menos')
                                    .required('Obligatorio'),
                    lastName: Yup.string()
                                    .max(10, 'Tiene que tener 10 caracteres o menos')
                                    .required('Obligatorio'),
                    email: Yup.string()
                                    .email('El email not tiene un formato valido')
                                    .required('Obligatorio'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Terms debe estar marcado'),
                                //.isTrue('Terms debe estar marcado') // mi opción
                    jobType: Yup.string()
                                    .required('Obligatorio')
                                    .notOneOf(['it-jr'], 'Esta opción no esta permitida'),
                    })
                }
            >
                {
                    (formik) => (
                    <Form noValidate>
                        <MyTextInput
                            label='First Name'
                            name="firstName"
                            placeholder="Insertar First Name"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Insertar Last Name"
                        />

                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </MySelect>

                        <MyCheckBox label="Terms and Conditions" name="terms" />

                        <button type='submit'>Submit</button>
                    </Form>
                    )
                }
            </Formik>
        </div>
  )

}
