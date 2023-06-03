import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                toast.success('Your Order Successfull')

            }
        })
        .catch(err => console.error(err))

    }

    return (
        <div className='m-10'>
            <h2 className=' text-4xl'>{title}</h2>
            <form onSubmit={handleCheckOut}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-24 mt-5" placeholder="Your Message"></textarea>
                <button className="btn btn-warning mt-5 block mx-auto">Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;