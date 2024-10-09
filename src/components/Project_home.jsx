import React from "react";
import { Link } from "react-router-dom";

const Project_home = () => {
    return (
        <>
            <div className="container-fluid">


                <section className=" section">
                    <div className="">
                        <div className="row">
                            <div className="col-sm-4 col-md-12 col-lg-12 ">




                                <header className="logo2 life">
                                    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top hii">
                                        <div className="container-fluid ">
                                            <div className="icon2"></div>
                                            <div className="life1">
                                                <i className="sahil">LifeLine</i>
                                            </div>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link active mt-3 ho" aria-current="page" href="#">Home</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/Doctor" className="nav-link active mt-3 ho">Doctor with us</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/Health" className="nav-link active mt-3 ho">Health package</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/Emergency" className="nav-link active mt-3 ho">Emergency</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="Online_r" className="nav-link active mt-3 ho" >Online report</Link>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle active mt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            More
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to="/Feedback" className="dropdown-item">Feedback</Link></li>
                                                            <li><Link to="/Cont" className="dropdown-item">Contact Us</Link></li>
                                                            <li><Link to="/Adminlogin" className="dropdown-item">Admin</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/Logins"><button className="book">Book Appointment</button></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </header>


                            </div>


                            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                                <div className="carousel-indicators ">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active first">
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Cardiac Sciences</h1>
                                        </div>
                                    </div>



                                    <div className="carousel-item  secound">

                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Cancer care</h1>
                                            <p>We lead in oncology services,blending expertise,compassion,and a legacy of helthcare excellenc.Our comprehensive approch to cancer care promotes a healthier,happier and loger life.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item thied">

                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Neuro Sciences</h1>
                                            <p>We specialize in Neurosciences, with dedicated teams for adult and pediatic neurosurgey and neurology.With a patient-centric apporoch,advance technologiy and global recognition,we ensure excellence in neurological care.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item forth">

                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Gastro Sciences</h1>
                                            <p>With expect doctors specializing in all areas of gastrosciences,we offer treatment and care for adult and children.Utilizing a patient-centric approch and advanced technology.We consistentli deliver excellence in gastrointestinal care. </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item five">

                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Orthopaedics</h1>
                                            <p>As one of the top Orthopaedics hospital in india.We've served thousands over two decades,delivering qulity healthcare.Using advance technologies,we've helped them regain mobility,relieve pain and improve thei of life.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>



                            <div className="bg_image">
                                <div className="l">
                                    <h1> About Us</h1>
                                    <p><b>LIFELINE</b> started its journey with a mission to provide quality heathcare,at an affordable cost for socity.With this mission & vission,it stated the <b>State-Of-the-art Diagnostic & Multispecialty service</b> in the year 1990 at kolkata,by deploying full time dedicated highly qulified panel of reputed Rediologist & Pathologists,as well as highly skilled and well-experienced paramedics from reputed institutions across the country to fulfil the commitment <b>LIFELINE</b> wants to deliver.It is the <b>best pathology lab in kolkata</b></p>
                                    <div >
                                        <button className="k"><b>know more</b></button>
                                    </div>

                                </div>


                                <div className="w">
                                    <h1> WHY CHOOSE LIFELINE</h1>
                                    <p className="pon">1. 365 days open.</p>
                                    <p className="pon">2. Affordable charges.</p>
                                    <p className="pon">3. Rigorous quality control.</p>
                                    <p className="pon">4. Providing dedicated healthcare services.</p>
                                    <p className="pon">5. Highly qualified, Doctors and medical staff.</p>
                                    <button className="k"><b>know more</b></button>
                                </div>

                            </div>
                            <div className="media">
                                <h1><i><u>Media & Events</u></i></h1></div>
                            <div className="m1">
                                <div className="ok">
                                    <div className="event0">

                                    </div>
                                    <button className="f0"> Seminars for healthcare improvement</button>
                                </div>
                                <div className="ok">
                                    <div className="event1">
                                    </div>
                                    <button className="f2"> Certified as patient care technicians by National Healthcareer Association(NHA)</button>
                                </div>
                                <div className="ok">
                                    <div className="event2">
                                    </div>
                                    <button className="f3"> Marched for cancer survivor and honors victims</button>
                                </div>
                                <div className="ok">
                                    <div className="event3">
                                    </div>
                                    <button className="f4"> Caring mental health during the pregnancy</button>
                                </div>

                            </div>

                            <div className="dec1">






                            </div>
                            <div className="patient">
                                <div >
                                    <h1 className="pa1">OUR HAPPY PATIENT</h1>
                                    <div className="pa2 "> <p>The patient experience is one of our top priorities,which is why we love hearing from patient.We're proud to share feedback <b>LIFELINE</b> has received over the years as we look forward to the tretment and care of many future patients.</p></div>


                                    <div className="cp">
                                        <div className="c0">
                                            <p className="p0">Service of your center is quit good. Staff are polite and helpful.</p>
                                            <h2>Suptapa Das</h2>
                                            <p>Patient</p>
                                        </div>
                                        <div className="c0">
                                            <p className="p0">The LIFELINE centre beniapukur is quite near and clean and service is quick as promised.</p>
                                            <h2>Shabnam Yasmin</h2>
                                            <p>Patient</p>
                                        </div>
                                        <div className="c0">
                                            <p className="p0">Service are easy and convient by the staff LIFELINE and they all are supported with every aspect and issue of patients.</p>
                                            <h2>Danish Rahman</h2>
                                            <h6>Patient</h6>
                                        </div>


                                    </div>

                                </div>

                            </div>

                            <div className="last">
                                <div>
                                    <h1 className="num">
                                        9810073+<p className="num1">Visitors</p>
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="num1">
                                        300+ <p className="num2">Professional Doctors</p>
                                    </h1></div>
                                <div>
                                    <h1 className="num">
                                        100% <p className="num1">Quality</p>
                                    </h1>
                                </div>
                                <div>
                                    <h1 className="num1">
                                        30+ <p className="num2">Year Experience</p>
                                    </h1>
                                </div>
                            </div>


                            <div className="last1">
                                <div className="logo3">

                                </div>
                                <div className="su">
                                    <i className="po1">LifeLine</i>
                                    <div className="su1">
                                        <p className="pp1"><b>Patient-Centered Care:</b>  Lifeline Hospital is known for its patient-centered approach to healthcare, ensuring that patients receive personalized and compassionate care. </p>
                                        <p className="pp1"><b>State-of-the-Art Facilities:</b> The hospital is equipped with modern medical equipment and facilities, providing high-quality healthcare services to patients. </p>
                                        <p className="pp1"><b>Community Engagement:</b> The hospital actively engages with the community through various outreach programs, health education initiatives, and free medical camps, promoting health and wellness in the community.</p>
                                        <p className="pp1"><b>Expert Medical Team:</b> Lifeline Hospital has a team of highly skilled and experienced healthcare professionals, including doctors, nurses, and support staff, who are committed to providing the best possible care to patients.</p>
                                    </div>
                                </div>

                            </div>




                            <div className="follow">
                                <h1><i><u>Follow us on</u></i></h1>
                            </div>
                            <div className="sumit">
                                <button >
                                    <a href="https://www.facebook.com"> <img className="fac"></img></a>
                                </button>
                                <button >
                                    <a href="https://twitter.com">  <img className="tui"></img></a>
                                </button>
                                <button >
                                    <a href="https://in.linkedin.com"><img className="in"></img> </a>
                                </button>

                                <button >
                                    <a href="https://www.instagram.com"><img className="insta"></img></a>
                                </button>
                                <div className="right">
                                    <h3>© LifeLine,2024.All rights reserved.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Project_home
