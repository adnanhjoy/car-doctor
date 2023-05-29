import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Servicies = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center my-5'>
                <p className=' text-orange-500 font-bold'>Service</p>
                <h1 className=' text-5xl my-5'>Our Service Area</h1>
                <p >the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-outline btn-warning my-10'>More Services</button>
            </div>
        </div>
    );
};

export default Servicies;