import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        toast.success(`Hello ${data.firstname}, thanks for contacting us. We will get back to you shortly.`);
        reset()
    };
    return (
        <>
            <div className='container register'>
                <section className="contact_us">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <div className="container my-5">
                                    <h1 className="mb-3">Contact Us</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="firstname" className="form-label">Your Name</label>
                                                <input type="text" className={errors.firstname ? "form-control error" : "form-control"} id="firstname" name="firstname"
                                                    {...register('firstname', { required: true })} />
                                                {errors.firstname && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="lastname" className="form-label">Your Surname</label>
                                                <input type="text" className={errors.firstname ? "form-control error" : "form-control"} id="lastname" name="lastname"
                                                    {...register('lastname', { required: true })} />
                                                {errors.lastname && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label">Your Email</label>
                                                <input type="email" className={errors.firstname ? "form-control error" : "form-control"} id="email" name="email"
                                                    {...register('email', { required: true })} />
                                                {errors.email && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="subject" className="form-label">Your Subject</label>
                                                <input type="text" className={errors.firstname ? "form-control error" : "form-control"} id="subject" name="subject"
                                                    {...register('subject', { required: true })} />
                                                {errors.subject && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label">Your Message</label>
                                                <textarea className={errors.firstname ? "form-control error" : "form-control"} id="message" name="message" rows={5} defaultValue={""}
                                                    {...register('message', { required: true })} />
                                                {errors.message && (
                                                    <p className='errorMsg'>Email is required</p>
                                                )}
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn btn-dark w-100 fw-bold">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="contact-img" style={{ width: '500px', height: '300px' }}>
                                <img src='/images/contact.png' style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="map_inner">
                                    <h4>Find Us on Google Map</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                    <div className="map_bind">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Contact
