import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="container-fluid bg-light mt-5">
            {/* <!-- footer up part --> */}
            <div class="container">
                <div class="row g-2">
                    <div class="col-xl-3 col-12">
                        <div class="p-3 bg-light">
                            <a class="navbar-brand d-flex text-align-center " href="#">
                                <span class="ps-1 fs-3 text-dark fw-bolder">AIM | Foucs Terget</span></a>
                            <p class="mt-4">Helping tell their career storices and get hired
                                built specifically for the education environment which is dedicated to  involve learners.</p>

                        </div>
                    </div>
                    <div class="col-xl-2 col-6">
                        <div class="p-3  bg-light">
                            <h3>Company</h3>
                            <li class="list-unstyled"><a href="#">About us</a></li>
                            <li class="list-unstyled"><a href="#">Contact us</a></li>
                            <li class="list-unstyled"><a href="#">News and Blogs</a></li>
                            <li class="list-unstyled"><a href="#">Libary</a></li>
                            <li class="list-unstyled"><a href="#">Career</a></li>
                        </div>
                    </div>
                    <div class="col-xl-2 col-6">
                        <div class="p-3  bg-light">
                            <h3>Community</h3>
                            <li class="list-unstyled"><a href="#">Documentation </a></li>
                            <li class="list-unstyled"><a href="#"> Faq</a></li>
                            <li class="list-unstyled"><a href="#">Forum</a></li>
                            <li class="list-unstyled"><a href="#">Sitemap</a></li>
                        </div>
                    </div>
                    <div class="col-xl-2 col-12">
                        <div class="p-3  bg-light">
                            <h3>Teaching</h3>
                            <li class="list-unstyled"><a href="#">Become a teacher </a></li>
                            <li class="list-unstyled"><a href="#">How to guide</a></li>
                            <li class="list-unstyled"><a href="#">Terms & Conditions</a></li>
                            <li class="list-unstyled"><a href="#">Sitemap</a></li>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12">
                        <div class="p-3  bg-light">
                            <h3>Contact</h3>
                            <li class="list-unstyled"><a href="#">More Informarion:+1234 568 963 </a></li>
                            <li class="list-unstyled"><a href="#">(9:AM to 8:PM BD)</a></li>
                            <li class="list-unstyled"><a href="#">Email:mdkzaman2022@gmail.com</a></li>
                        </div>
                        <div class="d-flex justify-content-around">
                            {/* <img src="./Image/Social-Icons/app-store.png" width="150px" class="img-fluid" alt="">
                                <img src="./Image/Social-Icons/google-play.png" width="150px" class="img-fluid" alt=""> */}
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            {/* <!-- footer down part  --> */}
            <div class="container px-4 my-5">
                <div class="row gx-5 justify-content-lg-between align-items-center">
                    <div class="col-xl-4 col-md-6 col-12">
                        <div class="bg-light text-center">
                            <p>Copyrights ©2021 zaman. All rights reserved.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-12">
                        <div class="row gx-1 align-items-center justify-content-around">
                            <div class="col-xl-4 col-md-6 col-6 text-center">
                                <div class="">
                                    <div class="dropup">
                                        <button class="btn btn-white dropdown-toggle text-primary" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fas fa-globe"></i> language
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-6 text-center">team of use</div>
                            <div class="col-xl-4 col-md-6  col-12 text-center">Privacy policy</div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;