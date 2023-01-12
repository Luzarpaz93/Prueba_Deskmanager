import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Login from './Components/Login/login';
import Profile from './Components/profile';



export default function App() {
  const token = localStorage.getItem('accessToken');
  // let element = useRoutes([
  //   {path: '/', element: <Login />},
  //   {path: '/about', element: <Profile />},
  // ]);

  return (
    <Login/>
  //   <Router>
  //   <div>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/login">Login</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <Routes>
  //       <Route path="/login" element={<Login />} />
  //       <Route
  //         path="*"
  //         element={
  //           <div>
  //             <h2>404 Page not found etc</h2>
  //           </div>
  //         }
  //       />
  //     </Routes>
  //   </div>
  // </Router>
  )

  }

  // if(!token) {
  //   return <Signin />
  // }

 
