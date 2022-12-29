import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [loginError, setLoginError] = useState('')
    const { SignIn, googleSignIn } = useContext(authContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        console.log(data)
        setLoginError(' ')
        SignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Google SignIn')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 character Longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        <span className="label-text">Forget Password?<button type='button' className='text-secondary'>Please Reset</button></span>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <div>
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </div>
                <p>New Social Media <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;