import React from 'react';
import img1 from '../../Image/reviewavater/03.jpg';
import img2 from '../../Image/reviewavater/10.jpg';
import img3 from '../../Image/reviewavater/avatar-1.jpg';
import img4 from '../../Image/reviewavater/avatar-14.jpg';
import img5 from '../../Image/reviewavater/avatar-2.jpg';


const Reviews = () => {
    const student = 304;
    return (
        <div id='review' className='mt-5 p-2 border border-2 border-danger shadow-lg'>
            <h1   className='my-4 text-center text-danger'>Review section</h1>
            <section className="container-fluid">
                <div className="container">
                    {/* feeds back section  */}
                    <div className="row g-2 align-items-center d-flex feedback-bg">
                        {/* student and teachers reviews and right section */}
                        {/* using order for responsive review  */}
                        <div className="col-xl-7 col-md-6 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2">
                            <div className="p-3 border bg-light rounded-3 feedback-left-bg">
                                <div className="row">
                                    <div className="row g-4">
                                        {/* left review  */}
                                        <div className="col-12 col-lg-7">
                                            {/* cotain 2 div  */}
                                            <div className="">
                                                {/* top div  */}
                                                <div className="text-center p-3 border shadow-lg rounded-3 mb-4 d-flex flex-column align-items-center">
                                                    <img className="rounded-circle" src={img1} width="100"
                                                        height="100" alt="" />
                                                    <p>You've taken a lengthy and boring coding class, but you're clueless about applying these concepts to build your ideas. The Codex shows you how to build fun, practical projects. Now, you can stand out from the crowd and land your dream job. </p>
                                                    <p className="fw-bold mt-3">Carolyn Ortiz</p>
                                                </div>
                                                {/* down div %% all rating part  */}
                                                <div
                                                    className="text-center w-50 float-end bg-danger p-3 border shadow-lg rounded-3 d-lg-block d-none">
                                                    {/* lg-display te show korbe but small drives ee show korbe na  */}
                                                    <h3>4.5/5.0</h3>
                                                    <p className="fw-bold mt-3">Based on {student} rating</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right side review  */}
                                        <div className="col-12 col-lg-5">
                                            {/* total left side  */}
                                            <div className="">
                                                {/* top part and mentors section */}
                                                <div className="p-3 border bg-info shadow-lg rounded-3 d-lg-block d-none">
                                                    <h2>Mentoreship<sup>+</sup></h2>
                                                    {/* mentor one  */}
                                                    <div className="d-flex align-items-center ">
                                                        <img src={img2} width="45px" height="45px"
                                                            alt="" />
                                                        <div className="ms-2">
                                                            <p className="fw-bold m-0">Lori Stevens <br /> <small> work on fb
                                                            </small> </p>
                                                        </div>
                                                    </div>
                                                    {/* mentor two */}
                                                    <div className="d-flex align-items-center ">
                                                        <img src={img3} width="45px" height="45px"
                                                            alt="" />
                                                        <div className="ms-2">
                                                            <p className="fw-bold m-0">Lori Stevens <br /> <small> work on rp
                                                            </small> </p>
                                                        </div>
                                                    </div>
                                                    {/* mentor three  */}
                                                    <div className="d-flex align-items-center ">
                                                        <img src={img4} width="45px" height="45px"
                                                            alt="" />
                                                        <div className="ms-2">
                                                            <p className="fw-bold m-0">Lori Stevens <br /> <small> work on ggoo
                                                            </small> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* down part just use a margin top for create a different  */}
                                                <div className="text-center p-3 border shadow-lg rounded-3 mt-5 mb-4 d-flex flex-column align-items-center">
                                                    <img className="rounded-circle" src={img5} width="100"
                                                        height="100" alt="" />
                                                    <p>It is a nice course. Nevertheless, some of the content and functions need to be updated to match the current python version </p>
                                                    <p className="fw-bold mt-3">Yen ben ling</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* text part in this section and right section */}
                        <div className="col-xl-5 col-md-6 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="p-3 border bg-light rounded-3 feedback-right-bg">
                                <h1 className="fw-bold">Some valuable feedback from my learners</h1>
                                <p>I took this course because I have learnt PHP and Laravel from Edwin Diaz. He is a great instructor. He explains everything very straightforward with a little hint of good humour. He also motivates you throughout the course so you can finish the course and not get bored.</p>
                                <button className="btn btn-primary btn-lg text-light" disabled>View Reviews</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;