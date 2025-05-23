import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Home from "./pages/auth/Dashboard/home.jsx";
import Income from "./pages/auth/Dashboard/Income.jsx";
import Expense from "./pages/auth/Dashboard/Expense.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}/>
          <Route path="/Login" exact element={<Login />}/>
          <Route path="/SignUp" exact element={<SignUp />}/>
          <Route path="/Home" exact element={<Home />}/>
          <Route path="/Income" exact element={<Income />}/>
          <Route path="/Expense" exact element={<Expense />}/>
      </Routes>
      </Router>

    </div>
  )
} //This code helps a website decide what to show when someone goes to different parts, like the home page or the login page.

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token"); 
//This tries to get a token (a secret string) from the browser’s local storage. That token means: “this person is logged in.”

  return isAuthenticated ? (
    <Navigate to="/Dashboard"/>
  ) :
  ( 
    <Navigare to="/Login" />
  );
};