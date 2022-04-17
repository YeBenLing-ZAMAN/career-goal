import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ServiceAsCartShowing = ({item, handleAddToCart}) => {
    const { picture, name, about, balance,id } = item;
    const navigate = useNavigate();
    const navigateToCourseDisplay = id =>{
        navigate(`/course/${id}`);
    }

    return (
        <Col className='d-flex'>
        <Card className=''>
            <Card.Img className='mx-auto img-fluid'  variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{about.slice(0, 100)}</Card.Text>
                <div className='d-flex align-items-center'>
                    <div>
                        <h3>{balance}</h3>
                    </div>
                    <div className='ms-auto'>
                    <Button variant="outline-primary me-2">see more</Button>
                    <Button onClick={()=>navigateToCourseDisplay(id)} variant="outline-danger">Add cart</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default ServiceAsCartShowing;