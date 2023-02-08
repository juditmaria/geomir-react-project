import React, { useState } from 'react'
import LoginRegister from './auth/LoginRegister'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './userContext';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import About from './About';
import NotFound from './NotFound';
import Places from './places/Places';
import Posts from './posts/Posts';
import { Routes, Route } from "react-router-dom";



export default function App() {

  let [authToken, setAuthToken] = useState("abcd");

  return (
    <>
      <UserContext.Provider value={{ authToken, setAuthToken }} >

        {authToken ? (
          <>
            <Header />

            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/places" element={<Places />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
          </>
          ) : (
            <LoginRegister />
          )}

      </UserContext.Provider>
    </>
  )
}