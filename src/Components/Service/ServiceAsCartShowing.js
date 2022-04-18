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
        <Card className='shadow-lg'>
            <Card.Img className='mx-auto img-fluid'  variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{about.slice(0, 100)}</Card.Text>
                <div className='d-flex align-items-center'>
                    <div>
                        <h3>{balance}</h3>
                    </div>
                    <div className='ms-auto'>
                    <Button onClick={()=>navigateToCourseDisplay(id)} variant="outline-danger">Enroll</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default ServiceAsCartShowing;