import { useFormik } from 'formik'
import React from 'react'
import { loginSchema } from '../schema';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: '',
    is_active:''
}
const User = () => {
    const {values,errors,handleChange,handleSubmit,touched} = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    });
  return (
    <>
    <div className='panel' id="panel-1">
        <div className="panel-hdr bg-danger-900 bg-info-gradient">
            <h2>
                Add <span className="fw-300"><i>User</i></span>
            </h2>
        </div>
        <div className="panel-container show">
            <div className="panel-content">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className='col-md-4'>
                            <label>Name</label>
                            <input type="text" name='name' value={values.name} className="form-control" placeholder="Name" onChange={handleChange} />
                            <p style={{ color:'red',fontWeight:'bold' }}>{ touched.name && errors.name }</p>
                        </div>
                        <div className='col-md-4'>
                            <label>Email</label>
                            <input type="email" name='email' value={values.email} className="form-control" placeholder="Email" onChange={handleChange} />
                            <p style={{ color:'red',fontWeight:'bold' }}>{ errors.email }</p>
                        </div>
                        <div className='col-md-4'>
                            <label>Password</label>
                            <input type="password" value={values.password} name='password' className="form-control" placeholder="Password" onChange={handleChange} />
                            <p style={{ color:'red',fontWeight:'bold' }}>{ touched.password && errors.password }</p>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label>Confirm Password</label>
                            <input type="password" value={values.confirm_password} name='confirm_password' className="form-control" onChange={handleChange} placeholder="Confirm Password" />
                            <p style={{ color:'red',fontWeight:'bold' }}>{ touched.confirm_password && errors.confirm_password }</p>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label>Role</label>
                            <select className="form-control select2" name='role' onChange={handleChange}>
                                <option value="">Select Role</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                                <option value="3">Super Admin</option>
                            </select>
                            <p style={{ color:'red',fontWeight:'bold' }}>{ touched.role && errors.role }</p>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label>Status</label>
                            <select className="form-control select2" name='is_active' onChange={handleChange}>
                                <option value="">Select Status</option>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                            </select>
                            <p style={{ color:'red',fontWeight:'bold' }}>{ touched.is_active && errors.is_active }</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary btn-sm" type='submit'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default User