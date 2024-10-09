import React from 'react';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Project_home from './components/Project_home.jsx';
import './Project_home.css';

import Emergency from './components/Emergency.jsx'
import './Emergency.css';

import Bookapp from './components/Bookapp.jsx';
import './Bookapp.css';

import Doctor from './components/Doctor.jsx';
import './Doctor.css';

import Health from './components/Health.jsx';
import './Health.css';

import Cont from './components/Cont.jsx';
import './Cont.css';

import Feedback from './components/Feedback.jsx';
import './Feedback.css';

import Regis from './components/Regis.jsx';
import './Regis.css';

import Logins from './components/Logins.jsx';
import './Login.css'

import Admin from './components/Admin.jsx';
import './Admin.css';

import Online_r from './components/Online_r.jsx';
import './Online_r.css';

import Adminlogin from './components/Adminlogin.jsx';
import './Adminlogin.css';

import Adminregister from './components/Adminregister.jsx';
import './Adminregister.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Project_home />}></Route>
          <Route exact path='/Emergency' element={<Emergency />}></Route>
          <Route exact path='/Doctor' element={<Doctor />}></Route>
          <Route exact path='/Health' element={<Health />}></Route>
          <Route exact path='/Cont' element={<Cont />}></Route>
          <Route exact path='/Feedback' element={<Feedback />}></Route>
          <Route path='/Regis' element={<Regis />}></Route>
          <Route exact path='/Logins' element={<Logins />}></Route>
          <Route exact path='/Bookapp' element={<Bookapp />}></Route>
          <Route exact path='/Admin' element={<Admin />}></Route>
          <Route exact path='/Online_r' element={<Online_r />}></Route>
          <Route exact path='/Adminlogin' element={<Adminlogin />}></Route>
          <Route exact path='/Adminregister' element={<Adminregister />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
