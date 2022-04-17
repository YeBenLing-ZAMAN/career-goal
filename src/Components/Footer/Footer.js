import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-light mt-5">
            {/* <!-- footer up part --> */}
            <div className="container">
                <div className="row g-2">
                    <div className="col-xl-3 col-12">
                        <div className="p-3 bg-light">
                            <a className="navbar-brand d-flex text-align-center " href="#">
                                <span className="ps-1 fs-3 text-dark fw-bolder">AIM | Foucs Terget</span></a>
                            <p className="mt-4">Helping tell their career storices and get hired
                                built specifically for the education environment which is dedicated to  involve learners.</p>

                        </div>
                    </div>
                    <div className="col-xl-2 col-6">
                        <div className="p-3  bg-light">
                            <h3>Company</h3>
                            <li className="list-unstyled"><a href="#">About us</a></li>
                            <li className="list-unstyled"><a href="#">Contact us</a></li>
                            <li className="list-unstyled"><a href="#">News and Blogs</a></li>
                            <li className="list-unstyled"><a href="#">Libary</a></li>
                            <li className="list-unstyled"><a href="#">Career</a></li>
                        </div>
                    </div>
                    <div className="col-xl-2 col-6">
                        <div className="p-3  bg-light">
                            <h3>Community</h3>
                            <li className="list-unstyled"><a href="#">Documentation </a></li>
                            <li className="list-unstyled"><a href="#"> Faq</a></li>
                            <li className="list-unstyled"><a href="#">Forum</a></li>
                            <li className="list-unstyled"><a href="#">Sitemap</a></li>
                        </div>
                    </div>
                    <div className="col-xl-2 col-12">
                        <div className="p-3  bg-light">
                            <h3>Teaching</h3>
                            <li className="list-unstyled"><a href="#">Become a teacher </a></li>
                            <li className="list-unstyled"><a href="#">How to guide</a></li>
                            <li className="list-unstyled"><a href="#">Terms & Conditions</a></li>
                            <li className="list-unstyled"><a href="#">Sitemap</a></li>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12">
                        <div className="p-3  bg-light">
                            <h3>Contact</h3>
                            <li className="list-unstyled"><a href="#">More Informarion:+1234 568 963 </a></li>
                            <li className="list-unstyled"><a href="#">(9:AM to 8:PM BD)</a></li>
                            <li className="list-unstyled"><a href="#">Email:mdkzaman2022@gmail.com</a></li>
                        </div>
                        <div className="d-flex justify-content-around">
                            {/* <img src="./Image/Social-Icons/app-store.png" width="150px" className="img-fluid" alt="">
                                <img src="./Image/Social-Icons/google-play.png" width="150px" className="img-fluid" alt=""> */}
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            {/* <!-- footer down part  --> */}
            <div className="container px-4 my-5">
                <div className="row gx-5 justify-content-lg-between align-items-center">
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="bg-light text-center">
                            <p>Copyrights ©2022 zaman. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="row gx-1 align-items-center justify-content-around">
                            <div className="col-xl-4 col-md-6 col-6 text-center">
                                <div className="">
                                    <div className="dropup">
                                        <button className="btn btn-white dropdown-toggle text-primary" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-globe"></i> language
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6 text-center">team of use</div>
                            <div className="col-xl-4 col-md-6  col-12 text-center">Privacy policy</div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;