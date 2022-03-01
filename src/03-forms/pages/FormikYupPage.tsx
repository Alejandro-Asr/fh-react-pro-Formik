import { useFormik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikYupPage = () => {



    const {
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values, 'valores')
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Tiene que tener 15 caracteres o menos')
                            .required('Obligatorio'),
            latName: Yup.string()
                            .max(10, 'Tiene que tener 10 caracteres o menos')
                            .required('Obligatorio'),
            email: Yup.string()
                            .email('El email not tiene un formato valido')
                            .required('Obligatorio')
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type="text"
                    { ...getFieldProps('firstName') }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName  }</span>}
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type="text"
                    { ...getFieldProps('lastName') }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName  }</span>}
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    { ...getFieldProps('email') }
                />
                { touched.email &&  errors.email && <span>{ errors.email  }</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
  )

}
