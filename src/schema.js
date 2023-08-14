import * as Yup from "yup";

export const loginSchema = Yup.object({
    name: Yup.string().required('⚠️ Name is required'),
    email: Yup.string().email('⚠️ Invalid email').required('⚠️ Email is required'),
    password: Yup.string().min(6, '⚠️ Password must be at least 6 characters').required('⚠️ Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('⚠️ Confirm Password is required'),
    role: Yup.string().required('⚠️ Role is required'),
    is_active: Yup.string().required('⚠️ Status is required'),
});