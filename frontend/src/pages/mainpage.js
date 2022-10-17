import { Container } from "../components/container";
import { Navbar } from "../components/navbar/navbar";
import { SectionOne } from "../components/sectionOne";
import { SectionTwo } from "../components/sectionTwo";
import React, { useRef } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainPage = () => {
  const mainRef = useRef(null);
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <SectionOne mainRef={mainRef} />
      <SectionTwo mainRef={mainRef} />
    </Container>
  );
};
