import React from 'react'
const Home=()=> {
  return (
    <div className="bg-black text-white min-h-screen">
    <Navbar />
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mt-16 p-4">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold">Sandeep Kumar</h1>
        <p className="text-gray-400 mt-4">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="contained"
          color="success"
          className="mt-6"
        >
          Let’s get started →
        </Button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full shadow-lg  h-[60vh] w-[60vh] object-cover max-w-full max-h-[50vh] sm:h-[40vh] sm:w-[40vh] xs:h-[30vh] xs:w-[30vh]"
        />
      </div>
    </div>
  </div>
  )
}

export default Home;
