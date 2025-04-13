import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Container,
  Box,
} from "@mui/material";
import bookStoreImage from "../assets/bookStoreImage.png";
import Footer from "./Footer";
import Navbar from "./Navabar";

const projects = [
  {
    title: "Book Store",
    image: bookStoreImage,
    highlights: ["React & Node.js", "API Integration", "Responsive Design","Swagger Ui"],
    description:
      "Developed a full-stack book store website using React, TypeScript, and Redux, enabling users to browse, search, and purchase books with a seamless shopping experience. Implemented secure user authentication with JWT and integrated REST APIs for real-time book data fetching, cart management, and order processing. Designed a responsive UI using Tailwind CSS and Material UI, ensuring cross-device compatibility and an optimal user experience.",
  },
  {
    title: "Pg finder Website",
    image: bookStoreImage,
    highlights: ["Html", "CSS", "Node","Express.JS"],
    description:
      "Developed Pg-Finder, a full-stack web application to streamline PG (Paying Guest) accommodation search, booking, and reviews, addressing common challenges faced by college students.Designed a scalable and efficient backend using Express.Js and MongoDB, ensuring smooth handling of data and user interactions.Deployed on Render with MongoDB Atlas as the cloud database, delivering a robust and accessible online platform.",
  },
  {
    title: "Fundoo-Notes",
    image: bookStoreImage,
    highlights: ["Vite-React.js", "Tailwind CSS", "Material UI"],
    description:
      "Built Fundoo Notes, a feature-rich note-taking application simulating real-world functionalities like creating, updating, archiving, and deleting notes. Integrated with a dummy REST API to mimic backend operations, enabling realistic front-end development and testing of CRUD functionalities. Implemented using React.js with component-based architecture and responsive UI design, ensuring a smooth and interactive user experience.",
  },
  {
    title: "Weather Dashboard",
    image: bookStoreImage,
    highlights: ["API Integration", "Chart.js", "Mobile-First"],
    description:
      "A weather app providing real-time forecasts with interactive charts.",
  },
];

const Project = () => {
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg" className="py-12">
      <Typography
        variant="h3"
        className="text-left mb-12  font-bold text-gray-800"
      >
        My Projects
      </Typography>
      <Box className="space-y-8 mt-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-95vw shadow-lg hover:shadow-xl transition-shadow duration-300 p-2"
          >
            <Box
              className="flex flex-col md:flex-row items-center"
              sx={{
                flexDirection: {
                  xs: "column", // Stack vertically on mobile and tablet
                  md: index % 2 === 0 ? "row" : "row-reverse", // Alternate on laptop
                },
              }}
            >
              {/* Image Section */}
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                className="object-contain w-full h-90"
                sx={{ maxHeight: 400, objectFit: "contain", border: "2px solid #ccc",       // Add border
                  borderRadius: "12px",  }}
              />
              {/* Content Section */}
              <CardContent className="w-full p-6 mr-1">
                <Typography
                  variant="h4"
                  className="font-semibold text-gray-900 mb-3"
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-600 mb-4 font-bold"
                >
                  {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.highlights.map((highlight, idx) => (
                    <Chip
                      key={idx}
                      label={highlight}
                      size="medium"
                      className="bg-blue-100 text-blue-800  font-bold"
                    />
                  ))}
                </div>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
    <Footer/>
    </>
  );
};

export default Project;
