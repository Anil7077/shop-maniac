import { removeCartItem } from '@/store/slices/newCartSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CartPage = () => {
    const users = useSelector((state) => state.newCart.myCart)
    const [seleteId, setDeleteId] = useState()
    const dispatch = useDispatch()
    console.log(users);
    const deletedItemsId = (unique_id) => {
        setDeleteId(unique_id);
    }
    const handleRemoveItems = () => {
        dispatch(removeCartItem(seleteId))
    }
    return (
        <>
            <div className="container my-5">
                {users && users.length > 0 ?
                    <>
                        {users.map((item, i) => (
                            <div className="cart-item" key={i}>
                                <img src={item.prodDetails.image} alt="Item 1" />
                                <div className="cart-item-details">
                                    <div className="item-name">{item.prodDetails.title}</div>
                                </div>
                                <div>
                                    <div className="item-quantity">Quantity: 1</div>
                                    <div className="item-price">${item.prodDetails.price}</div>
                                </div>
                                <button className='cart-item-remove' onClick={() => deletedItemsId(item.id)} 
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Remove</button>
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

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm ">
                    <div className="modal-content bg-dark">
                        <div className="modal-body">
                            <h4 style={{color: 'white'}}>Are you sure ?</h4>
                            <div className='d-flex justify-content-end gap-2'>
                                <button className='gn-btn' data-bs-dismiss="modal" onClick={handleRemoveItems}>Yes</button>
                                <button className='rd-btn' data-bs-dismiss="modal">No</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default CartPage
