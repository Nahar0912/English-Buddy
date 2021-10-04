import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';


const Courses = () => {
    const [service,setCourses]=useState([]);
    useEffect(()=>{
            fetch('course.JSON')
            .then(res=>res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        <div className="container">

            <h3 className="text-center my-3">An investment in knowledge pays the best interest. –  Benjamin Franklin</h3>
            <div className="row">
               {  
                    service.map(service => <Cart
                        key={service.key}
                        service={service}
                    ></Cart>)
               }
            </div>
        </div>
    );
};

export default Courses;