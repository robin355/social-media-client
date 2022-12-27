
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [SignupError, setSignupError] = useState('')
    const navigate = useNavigate()
    const { createUser } = useContext(authContext)
    const handleSignup = data => {
        setSignupError(' ')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                handleUserInfo(data.name, data.email, data.university, data.address)
                navigate('/login')
                toast.success('user Create Successfully');
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }
    const handleUserInfo = (name, email, university, address) => {
        const userInfo = { name, email, university, address }
        fetch(`http://localhost:5000/userInfo`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User Data Uploaded');
            })
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">University</span>
                        </label>
                        <input type="text" {...register("university", {
                            required: "university is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.university && <p className='text-red-600'>{errors.university?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" {...register("address", {
                            required: "Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.address && <p className='text-red-600'>{errors.address?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: " Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 character Longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-3' value='Signup' type="submit" />
                </form>
                {
                    SignupError && <p className='text-red-600'>{SignupError}</p>

                }
                <p>Already have an Account?<Link className='text-secondary' to='/login'>Please Login</Link></p>


            </div>
        </div>
    );
};

export default SignUp;