import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
    const { serviceName, price, customer, phone, email, service } = order;
    const [selectOrders, setSelectOrders] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setSelectOrders(data))
    }, [service])

    return (
        <tr>
            <th>
                <button className="btn btn-circle btn-outline hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                selectOrders?.img &&
                                <img src={selectOrders.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;