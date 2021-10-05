import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [services,setServices]=useState([]);
    useEffect(() => {
        fetch('homedata.JSON')
            .then(res => res.json())
            .then(data => {setServices(data);
            });
    },[])

    return (
        <div className='container'>
            <div className='d-flex'>
                <div>
                    <img src="https://img.graphicsurf.com/2020/06/Kid-English-learning-vector-design.jpg" alt="" width='700px' />
                </div>
                <div className='text-center'>
                    <h1 className='mt-5'>Welcome to English Buddy</h1>
                    <br />
                    <h4>Learn English online with the experts</h4>
                </div>
            </div>
            <div className="row">
               {
                   services.map(service=><Cart 
                        key={service.key}
                        service={service}
                   ></Cart>)
               }
           </div>
        </div>
    );
};

export default Home;