import { useEffect } from "react";
import { ResumeProvider } from "./Context";
import "./App.css";
import Navbar from "./components/Layouts/Navbar";
import Main from "./components/Main";
import WebFont from "webfontloader";

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
      <ResumeProvider>
        <Navbar />
        <Main />
      </ResumeProvider>
    </>
  );
}

export default App;
