import { useSnackBarContext } from '@/context/SnackbarContext';
import { addUsers } from '@/store/slices/newUserSlice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setType, setMessage } = useSnackBarContext();
    const router = useRouter();
    const dispatch = useDispatch()
    const users = useSelector((state) => state?.users?.newUser?.myUsers)
    console.log(users);

    const onSubmit = async (data) => {
        const emailExists = users?.some(user => user.email === data.email);

        if (emailExists) {
            toast.error("Email already exists!");

        } else {
            dispatch(addUsers(data));
            router.push('/login')
        }
        reset()
    };
    return (
        <>
            <div className="container-one my-5 register">
                <div className="card">
                    <div className="card_title">
                        <h1>Create Account</h1>
                        <span>Already have an account? <a href="login">Sign In</a></span>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className={errors.username ? "error" : ""} type="text" name="username" id="username" placeholder="UserName"
                                {...register('username', { required: true })} />
                            {errors.username && (
                                <p className='errorMsg'>username is required</p>
                            )}
                            <input className={errors.email ? "error" : ""} type="email" name="email" placeholder="Email" id="email"
                                {...register('email', { required: true })} />
                            {errors.email && (
                                <p className='errorMsg'>Email is required</p>
                            )}
                            <input className={errors.password ? "error" : ""} type="password" name="password" placeholder="Password" id="password"
                                {...register('password', { required: true })} />
                            {errors.password && (
                                <p className='errorMsg'>password is required</p>
                            )}
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div className="card_terms">
                        <input type="checkbox" id="terms" /> <span>I have read and agree to the <a href>Terms of Service</a></span>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default RegisterPage
