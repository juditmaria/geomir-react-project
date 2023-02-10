//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Estados, contextos y rutas
import React, { useState } from "react";
import { UserContext } from "./userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componentes
import Header from './Layout/Header';

import Footer from './Layout/Footer';

import NotFound from './NotFound';
import Places from './places/Places';
import Posts from './posts/Posts';
import About from './About';

import LoginRegister from './auth/LoginRegister';

export default function App() {

  let [authToken, setAuthToken] = useState("abcd");

  return (
    <>
      <UserContext.Provider value={{ authToken, setAuthToken }} >

        {authToken ? (
          <>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/places" element={<Places />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </>
          ) : (
            <LoginRegister />
          )}

      </UserContext.Provider>
    </>
  )
}