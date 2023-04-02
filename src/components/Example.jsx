import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

let schema = object({
  login: string().email().required(),
  password: string().required().min(7),
//   email: string().email(),
});

const initialValues = {
    login: '',
    password: ''
}

export const LogForm = () => {

    const onFormSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm()

    }

    return (
        <Formik initialValues={initialValues} onSubmit={onFormSubmit} validationSchema={schema}>
            <Form autoComplete='off'>
                <label>
                    Log In
                    <ErrorMessage name='login' component="div"></ErrorMessage>
                    <Field type="text" name="login"/>
                </label>
                <label>
                    Password
                    <ErrorMessage name='password' component="div"></ErrorMessage>
                    <Field type="password" name="password"/>
                </label>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}