import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
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
                        <label htmlFor='firstName'>First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span"/>
                        <label htmlFor='lastName'>Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span"/>
                        <label htmlFor='email'>Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span"/>
                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span"/>

                        <label htmlFor='jobType'>Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                        <button type='submit'>Submit</button>
                    </Form>
                    )
                }
            </Formik>
        </div>
  )

}
