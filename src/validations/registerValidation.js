import * as yup from 'yup'

const registerValidationSchema = yup.object().shape({
    username: yup
    .string()
    .min(3, "Username at least 3 characters")
    .max(20, 'Username maximum 20 characters')
    .required('Username is required'),

    email: yup
    .required('Email is required'),

    password: yup
    .string()
    .min(6, "Password at least 6 characters")
    .required('Password is required'),
})

export default registerValidationSchema