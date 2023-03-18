import { useEffect } from "react";
import { ResumeProvider } from "./Context";
import "./App.css";
import Navbar from "./components/Layouts/Navbar";
import Main from "./components/Main";
import WebFont from "webfontloader";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/loginPage/index.jsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pacifico", "Poppins"],
      },
    });
  }, []);

  return (
    <>
      {/* <BrowserRouter> */}
      <ResumeProvider>
        {/* <Routes> */}
        {/* <Route path="/" element={<LoginPage />} /> */}
        {/* <LoginPage /> */}
        <Navbar />
        <Main />
        {/* </Routes> */}
      </ResumeProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
