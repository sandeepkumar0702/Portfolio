import React from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import profileImage from "../assets/photo.JPG";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="bg-black text-white min-h-screen"
      style={{ backgroundImage: "url('/public/him.avif')" }}
    >
      <Navbar />

      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center mt-16 p-4 gap-8 bg-fit bg-center"
        style={{ backgroundImage: "url('/public/him.avif')" }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Sandeep Kumar</h1>
          <p className="text-gray-400 mt-4 max-w-md mx-auto md:mx-0">
            Dedicated and skilled student with a strong passion for innovation
            and efficiency. Excels in dynamic settings, collaborating across
            teams to lead successful software projects. Grounded in software
            engineering principles and committed to continuous learning for
            delivering top-notch code that surpasses user expectations.
          </p>
          <Button
            variant="contained"
            color="success"
            className="mt-10"
            sx={{ textTransform: "none", fontWeight: "bold", mt: 2 }}
          >
            Let’s get started →
          </Button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          {/* <img
            src={profileImage}
            alt="Sandeep Kumar Profile"
            className="rounded-full shadow-lg w-[80vh] h-[70vh] sm:w-[90vh] sm:h-[40vh] md:w-[90vh] md:h-[70vh] object-fill"
          /> */}
          <img
  src={profileImage}
  alt="Sandeep Kumar Profile"
  className="rounded-full shadow-lg 
    w-[250px] h-[250px]        /* Mobile (default) */
    sm:w-[300px] sm:h-[300px]  /* Small devices */
    md:w-[350px] md:h-[350px]  /* Medium devices */
    lg:w-[400px] lg:h-[400px]  /* Large devices */
    xl:w-[450px] xl:h-[450px]  /* Extra large */
    object-cover"
/>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
