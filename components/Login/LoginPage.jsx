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
    const users = useSelector((state) => state?.newUser.myUsers)
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
            {/* <div className="login-container register">
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
            </div> */}
            <div className="container-fluid register">
                <div className="row no-gutter">
                    {/* The image half */}
                    <div className="col-md-6 d-none d-md-flex bg-image" />
                    {/* The content half */}
                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">
                            {/* Demo content*/}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4 mb-3">Login here</h3>
                                        <p className="text-muted mb-4">Stay updated on your shopping world.</p>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group mb-3 mt-4">
                                                <input id="inputEmail" type="email" placeholder="Email address" autofocus
                                                    className={errors.email ? "form-control error rounded-pill border-0 shadow-sm px-4" : "form-control rounded-pill border-0 shadow-sm px-4"}
                                                    {...register('email', { required: true })}
                                                />
                                                {errors.email && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="form-group mb-3 mt-4">
                                                <input id="inputPassword" type="password" placeholder="Password"
                                                    className={errors.password ? "form-control error rounded-pill border-0 shadow-sm px-4" : "form-control rounded-pill border-0 shadow-sm px-4"}
                                                    {...register('password', { required: true })}
                                                />
                                                {errors.password && (
                                                    <p className='errorMsg'>Password is required</p>
                                                )}
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3">
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                            <br />
                                            <p>Don't have an account? <Link href="/register">Sign Up</Link></p>
                                        </form>
                                    </div>
                                </div>
                            </div>{/* End */}
                        </div>
                    </div>{/* End */}
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default LoginPage;