import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const users = useSelector((state) => state?.newUser.myUsers )
    const router = useRouter();
    console.log(users);

    const onSubmit = async (data) => {
        const emailAuth = users?.some(user => user.email === data.email);
        console.log(emailAuth);
        try {
            if (emailAuth) {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: data.email,
                    password: data.password,
                });

                if (result.error) {
                    console.error(result.error);
                } else {
                    router.push('/');
                }
            } else {
                toast.error("Invalid credentials");
            }
        } catch (error) {
            console.error('Failed to sign in:', error);
        }
    };

    return (
        <>
            <div className="login-container register">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Welcome Back</h1>
                    <p>Please login to your account</p>
                    <div className="input-group">
                        <input className={errors.email ? "error" : ""} type="text" id="username" name="email" placeholder="Email"
                            {...register('email', { required: true })} />
                        {errors.email && (
                            <p className='errorMsg'>Email is required</p>
                        )}
                    </div>
                    <div className="input-group">
                        <input className={errors.password ? "error" : ""} type="password" id="password" name="password" placeholder="Password"
                            {...register('password', { required: true })} />
                        {errors.password && (
                            <p className='errorMsg'>Password is required</p>
                        )}
                    </div>
                    <button type="submit">Login</button>
                    <div className="bottom-text">
                        <p>Don't have an account? <Link href="/register">Sign Up</Link></p>
                        <p><a href="#">Forgot password?</a></p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginPage;