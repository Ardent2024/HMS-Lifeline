import React from "react";
import { Link } from "react-router-dom";
const Doctor = () => {
  return (
    <>
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
                            <Link to="/" className="nav-link active mt-3 ho" aria-current="page" >Home</Link>
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





      <div className="doc">
        <div className="doc_inside">
          Meet   our   doctors
        </div>
      </div>
      <div className="doc1">
        Find Expert  Doctors For Personalised Care
      </div>



      <div className="boxing">

        <div className="box1">
          <div className="count1">


            <h4>Dr Sandeep Budhiraja</h4>
          </div>

          <div className="d1">

          </div>
          <div className="details2">
            <p>Group Medical Director -Healthcare & Senior<br></br>
              Director - Institute of Internal Medicine <br></br>

              Internal Medicine<br></br>
              EXperience: 27+ years<br></br>
              Gender : Male<br></br>
            </p>
            <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

          </div>

        </div>



        <div className="box2">
          <div className="count2">


            <h4>Dr Subhas Chandra</h4>
          </div>

          <div className="d2">

          </div>
          <div className="details2">
            <p>Chairman- Interventional Cardiology - & Structural Heart Disease<br></br>

              Cardiology, Cardiac Sciences, Cardiac Electrophysiology-Pacemaker<br></br>
              Gender : Male
            </p>
            <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

          </div>

        </div>
      </div>


      <div className="box3">
        <div className="count3">


          <h4>Dr Anupama Bhargava</h4>
        </div>

        <div className="d3">

        </div>
        <div className="details2">
          <p>Chairman - Urology<br></br>

            Urology
            <br></br>
            Experience: 30+ Years
            <br></br>
            Gender : Male<br></br>
          </p>
          <br></br><Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>
      <div className="box13">
        <div className="count13">


          <h4>LISTS OF DOCTORS</h4>
        </div>

        <div className="details3">
          <div className="doc-list"><h4>Department Of Pathology</h4> </div>

          <ul>
            <li>Dr. Debasis Banerjee - MD. (Pathology)</li>
            <li>Dr. Soma Ray - DCH., DCP. (CAL)</li>
            <li>Dr. Susruta Sen - MD., DNB.</li>
            <li>Dr. Rituparna Haldar - MD. (Microbiology)</li>
            <li>Dr. Souvik Dutta - MD. (Pathology)</li>
            <li>Dr. Malay Roy - MD. (Pathology)</li></ul>
        </div>
        <div className="details3">

          <div className="doc-list"><h4>Department Of Paediatric cardiology</h4> </div>

          <ul>
            <li>Dr. Debasis Banerjee - MD. (Pathology)</li>
            <li>Dr. Soma Ray - DCH., DCP. (CAL)</li>
            <li>Dr. Susruta Sen - MD., DNB.</li>
            <li>Dr. Rituparna Haldar - MD. </li>
            <li>Dr Babita Jain -MD .</li>
            <li>Dr. Subhas Chandra -MD.</li></ul>
        </div>

        <div className="details3">

          <div className="doc-list"><h4>Department Of Neurology</h4> </div>

          <ul>
            <li>Dr. Shankar Prasad Saha - MD., DM.</li>
            <li>Dr. Arindam Das - MD., DM.</li>
            <li>Dr. JD Mukherjee - MD., DM</li>
          </ul>
        </div>
        <div className="details3">

          <div className="doc-list"><h4>Department Of Radiology</h4> </div>

          <ul>
            <li>Dr. Sanjukta Sarkar - MD. (Radiology)</li>
            <li>Dr.Bharat Aggarwal - MD. (Radiology)</li>
            <li>Dr.Pankaj Dougall - MD. (Radiology)</li>
            <li>Dr. Subhas Chandra -MD.</li></ul>
        </div>

        <div className="details3">

          <div className="doc-list"><h4>Department Of Gastroenterology</h4> </div>

          <ul>
            <li>Dr. Bipul Barman - MD., DM.</li>
            <li>Dr. Pradipta Guha - MD., DM.</li>
            <li>Dr.Ajay Kumar- MD., DM.</li></ul>
        </div>

        <div className="details3">

          <div className="doc-list"><h4>Department Of Urology</h4> </div>

          <ul>
            <li>Dr. Bipul Barman - MD., DM.</li>
            <li>Dr.Anupama Bhargavar- MD., DM.</li></ul>
        </div>

        <div className="details3">

          <div className="doc-list"><h4>Department Of Gynaecology</h4> </div>

          <ul>
            <li>Dr. Manju Kheemani- MS. (O & G)</li>
            <li>Dr. Marium Haque - MD. (O & G)</li>
            <li>Dr. Priya Tiwari - MS. (O & G)</li></ul>
        </div>
      </div>



      <div className="box4">
        <div className="count4">


          <h4>Dr Harit Chaturvedi</h4>
        </div>

        <div className="d4">

        </div>
        <div className="details2">
          <p>Cancer Care / Oncology, Thoracic Oncology, Surgical Oncology, Robotic Surgery, Head & Neck Oncology, Breast Cancer<br></br>

            Experience: 33+ Years<br></br>
            Gender : Male<br></br>
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>


      <div className="box5">
        <div className="count5">


          <h4>Dr Anita Sethi</h4>
        </div>

        <div className="d5">

        </div>
        <div className="details2">
          <p>Ophthalmologist <br></br>
            Eye Care / Ophthalmology<br></br>

            Experience: 23+ Years<br></br>

            Gender: Female
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>

      <div className="box6">
        <div className="count6">


          <h4>Dr JD Mukherjee</h4>
        </div>

        <div className="d6">

        </div>
        <div className="details2">
          <p>Vice Chairman & Head- Neurology<br></br>

            Neurosciences, Neurology<br></br>

            Experience: 28+ Years<br></br>

            Gender : Male<br></br>
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>

      <div className="box7">
        <div className="count7">


          <h4>Dr Vandana Soni</h4>
        </div>

        <div className="d7">

        </div>
        <div className="details2">
          <p>Endoscopic and Bariatric Surgery<br></br>

            Laparoscopic / Minimal Access Surgery, Bariatric Surgery / Metabolic, Institute of Laparoscopic <br></br>

            Experience: 28+ Years<br></br>

            Gender: Female<br></br>
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>


      <div className="box8">
        <div className="count8">


          <h4>Dr Bharat Aggarwal</h4>
        </div>

        <div className="d8">

        </div>
        <div className="details2">
          <p>Principal Director - Radiology Services<br></br>

            Radiology<br></br>

            Experience: 24+ Years<br></br>
            Gender : Male<br></br>
          </p>
          <br></br> <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>


      <div className="box9">
        <div className="count9">


          <h4>Dr Ajay Kumar</h4>
        </div>

        <div className="d9">

        </div>
        <div className="details2">
          <p>Chairman - Gastroenterology & Hepatology - BLK Institute for Digestive & Liver Diseases<br></br>

            & Endoscopy<br></br>

            Experience: 36+ Years<br></br>

            Gender: Male<br></br>
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>


      <div className="box10">
        <div className="count10">


          <h4>Dr Babita Jain</h4>
        </div>

        <div className="d10">

        </div>
        <div className="details2">
          <p>Senior Director & HOD<br></br>

            Paediatrics (Ped)<br></br>

            Experience: 30+ Years<br></br>

            Gender: Female<br></br>
          </p>
          <br></br> <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>

      <div className="box11">
        <div className="count11">


          <h4>Dr Pankaj Dougal</h4>
        </div>

        <div className="d11">

        </div>
        <div className="details2">
          <p>Principal Director & Head  Nuclear Medicine<br></br>

            Nuclear Medicine<br></br>

            Experience: 36+ Years<br></br>
            Gender : Male<br></br>
          </p>
          <Link to="/Logins"><button class="btn btn-primary  change">Book Appointment</button></Link>

        </div>

      </div>
      <div className="box12">
        <div className="count12">


          <h4>Dr Manju Kheemani</h4>
        </div>

        <div className="d12">

        </div>
        <div className="details2">
          <p>Senior Director (Obstetrics & Gynaecology) & Head of Unit<br></br>

            Obstetrics And Gynaecology<br></br>

            Experience: 42+ Years<br></br>

            Gender: Female
          </p>
          <Link to="/Logins"><button class="btn btn-primary change">Book Appointment</button></Link>

        </div>

      </div>

      <div className="down">

      </div>

    </>
  )
}
export default Doctor;