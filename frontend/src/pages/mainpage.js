import { Container } from "../components/container";
import { Navbar } from "../components/navbar/navbar";
import { SectionOne } from "../components/sectionOne";
import { SectionTwo } from "../components/sectionTwo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainPage = () => {
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
      <SectionOne />
      <SectionTwo />
    </Container>
  );
};
