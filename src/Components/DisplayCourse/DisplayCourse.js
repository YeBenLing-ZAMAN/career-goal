import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices';
import Loading from '../Loading/Loading';

const DisplayCourse = () => {

    const { displayCourseID } = useParams();
    const [services] = useServices();
    useEffect(() => {
    }, [services])
    const selected = services.find(item => item.id === displayCourseID)
    console.log(selected);
    if (selected === undefined) {
        return <Loading></Loading>
    }
    const { id, name, balance, picture, Type, about } = selected;
    console.log(id, name, balance);
    return (
        <div className='d-flex w-100 flex-column flex-md-row align-items-center justify-content-around' style={{minHeight:'100vh'}}>
            <Card className='w-25 shadow-lg'>
                <Card.Img className='mx-auto img-fluid' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{about.slice(0, 100)}</Card.Text>
                </Card.Body>
            </Card>
            <div className='border border-2 border-danger p-3 rounded shadow-lg'>
                <h2>Summary</h2>
                <h4>{name} course price : {balance}</h4>
                <hr />
                <h4 className='position-relative'>total: <span className='position-absolute top-50 end-0'>{balance}</span></h4>
                <button className='mt-4 w-100 btn btn-danger' >Check Out</button>
            </div>
        </div>
    );
};

export default DisplayCourse;