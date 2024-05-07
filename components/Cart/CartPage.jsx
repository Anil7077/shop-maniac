import { removeAll, removeCartItem, increaseQty, decreaseQty } from '@/store/slices/newCartSlice';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import QRCode from "react-qr-code";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const users = useSelector((state) => state.newCart.myCart)
    const [newContent, setNewContent] = useState(false)
    const dispatch = useDispatch()
    const [seleteId, setDeleteId] = useState()
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalTax, setTotalTax] = useState(0)
    const [shippingCharge, setShippingCharge] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const deletedItemsId = (unique_id) => {
        setDeleteId(unique_id);
    }
    const handleRemoveItems = () => {
        dispatch(removeCartItem(seleteId))
    }
    const increaseItem = (id) => {
        console.log(id);
        dispatch(increaseQty(id))
    }
    useEffect(() => {
        let totalAmt = 0;
        let totalProds = 0;
        users.forEach((item) => {
            totalAmt += item.prodDetails.price * item.quantity;
            totalProds += item.quantity;
        });
        setTotalAmount(totalAmt);
        setTotalProducts(totalProds);
        if (totalAmount <= 500) {
            setTotalTax(75.32)
            setShippingCharge(150)
        } else if (totalAmount <= 1200) {
            setTotalTax(135.77)
            setShippingCharge(70)
        } else if (totalAmount <= 2700) {
            setTotalTax(235.57)
            setShippingCharge(50)
        } else {
            setTotalTax(321.12)
            setShippingCharge(0)
        }
    }, [users]);
    useEffect(() => {
        setSubTotal(totalAmount + totalTax + shippingCharge)
    }, [totalAmount, totalProducts, totalTax])
    const handleRemoveAll = () => {
        dispatch(removeAll())
    }
    const onSubmit = async (data) => {
        toast.success('Orders placed successfully')
        setNewContent(true)
    };
    return (
        <>
            <div className="container cart-page">
                <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '15px' }} className='mt-4 ms-3'>
                    <button className='remove-all-cart'
                        data-bs-toggle="modal" data-bs-target="#exampleModal2">Remove All</button>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="container my-5" style={{ maxHeight: '450px', overflowY: 'scroll' }}>
                            {users && users.length > 0 ?
                                <>
                                    {users?.map((item, i) => (
                                        <div className="cart-item" key={i}>
                                            <img src={item?.prodDetails?.image} alt="Item 1" />
                                            <div className="cart-item-details">
                                                <div className="item-name">{item?.prodDetails?.title}</div>
                                            </div>
                                            <div>
                                                <button className='increase-btn' onClick={() => increaseItem(item?.id)}>+</button>
                                                <input type="text" value={item?.quantity} style={{ textAlign: 'center', width: '50px', margin: '4px' }} />
                                                <button className='decrease-btn' onClick={() => dispatch(decreaseQty(item?.id))}>-</button>
                                            </div>
                                            <div>
                                                <div className="item-quantity">Quantity: {item?.quantity}</div>
                                                <div className="item-price">${((item?.prodDetails?.price) * (item?.quantity)).toFixed(2)}</div>
                                            </div>
                                            <button className='cart-item-remove' onClick={() => deletedItemsId(item?.id)}
                                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </div>

                                    ))}
                                </>
                                :
                                <>
                                    <div class="alert alert-dark text-center" role="alert">
                                        <h3>No cart items found</h3>
                                    </div>
                                </>}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        {users && users.length > 0 &&
                            <div className="container my-5">
                                <div className='total-bill'>
                                    <p><b>Total amount : </b> {totalAmount ? (totalAmount).toFixed(2) : 0}</p>
                                    <p><b>Products : </b> {totalProducts ? totalProducts : 0}</p>
                                    <p><b>Tax : </b> {totalTax ? totalTax : 0}</p>
                                    <p><b>Shipping charge : </b> {shippingCharge ? shippingCharge : 0}</p>
                                    <hr />
                                    <p><b>Subtotal : </b> <b>{subTotal}</b></p>

                                </div>
                                <button className='CHECKOUT-BTN'
                                    data-bs-toggle="modal" data-bs-target="#exampleModal3">PROCEED TO CHECKOUT</button>
                            </div>
                        }
                    </div>
                </div>
            </div>


            {/* Modal -- 1 */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm ">
                    <div className="modal-content bg-dark">
                        <div className="modal-body">
                            <h4 style={{ color: 'white' }}>Are you sure ?</h4>
                            <div className='d-flex justify-content-end gap-2'>
                                <button className='gn-btn' data-bs-dismiss="modal" onClick={handleRemoveItems}>Yes</button>
                                <button className='rd-btn' data-bs-dismiss="modal">No</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ------------------ */}
            {/* Modal -- 2 */}
            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm ">
                    <div className="modal-content bg-dark">
                        <div className="modal-body">
                            <h4 style={{ color: 'white' }}>All the items will be removed. Are you sure ?</h4>
                            <div className='d-flex justify-content-end gap-2'>
                                <button className='gn-btn' data-bs-dismiss="modal" onClick={handleRemoveAll}>Yes</button>
                                <button className='rd-btn' data-bs-dismiss="modal">No</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ------------------ */}
            {/* modal--3-- */}

            <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog cart-payment-modal ">
                    <div className="modal-content register">

                        <b className='text-center mt-2' style={{ fontSize: '23px' }}>Pay to place Order</b>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="modal-body">
                                <input type="text" placeholder='Name'
                                    {...register('name', {
                                        required: true
                                    })} />
                                {errors.name && (
                                    <p className='errorMsg'>Name is required</p>
                                )}
                                <input type="number" placeholder='Phone number'
                                    {...register('number', {
                                        required: true
                                    })} />
                                {errors.number && (
                                    <p className='errorMsg'>Phone number is required</p>
                                )}
                                <input type="email" placeholder='Email'
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    })} />
                                {errors.email && (
                                    <p className='errorMsg'>{errors.email.message}</p>
                                )}
                                <input type="text" placeholder='Pin code'
                                    {...register('pin_code', {
                                        required: true
                                    })} />
                                {errors.pin_code && (
                                    <p className='errorMsg'>Pin code is required</p>
                                )}
                                <textarea name="" id="" placeholder='Address' rows={5}
                                    {...register('address', {
                                        required: true
                                    })}></textarea>
                                {errors.address && (
                                    <p className='errorMsg'>Address is required</p>
                                )}
                                <div className='mt-2'>
                                    <h5>Scan the code and pay :</h5>
                                    <div>
                                        <QRCode
                                            value={`payment : ${subTotal}`}
                                            size={100}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ------------ */}
            <ToastContainer />
        </>
    )
}

export default CartPage
