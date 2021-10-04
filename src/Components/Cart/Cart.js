import React from 'react';
import { Card,Button } from 'react-bootstrap';

const Cart = (props) => {
    const{id,name,price,registration,tutor,img}=props.service;
    console.log(name)
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 c-cart my-3 ">
           <Card>
                <Card.Body>
                    <div className="text-center">
                        <img src={img} alt="" width='80%'/>
                    </div>
                    <Card.Title className="text-center">Course name:{name}</Card.Title>
                    <Card.Text>
                            <h4>Deadline:{registration}</h4>
                    </Card.Text>
                    <div>
                        <h3>Price : {price} $</h3>
                    </div>
                    <div className='fw-bold'>Instructor : {tutor}</div>
                    <Button className="btn btn-info my-1" variant="info">Enroll Now </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{id} days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Cart;
