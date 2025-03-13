import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Competition = ({ title, description, image, buttonLink }) => {
  return (
    <motion.div 
      className="relative w-96 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0">
        <img 
          src={image || "/api/placeholder/400/300"} 
          alt={title} 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{title}</h2>
        <p className="text-white text-lg drop-shadow-md">{description}</p>
        <Link 
          to={buttonLink} 
          className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-110 shadow-lg"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

const Competitions = () => {
  const competitionsData = [
    {
      title: "Startup Pitch Competition",
      description: "Showcase your innovative business ideas and win funding for your startup.",
      image: "/api/placeholder/400/300",
      buttonLink: "/pitch-competition"
    },
    {
      title: "Hackathon Challenge",
      description: "A 48-hour coding marathon to build solutions for real-world problems.",
      image: "/api/placeholder/400/300",
      buttonLink: "/hackathon"
    },
    {
      title: "Design Thinking Workshop",
      description: "Learn and apply design thinking methodologies to solve complex problems.",
      image: "/api/placeholder/400/300",
      buttonLink: "/design-workshop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      <div className="container mx-auto px-6 py-12 flex-grow">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Upcoming Competitions</h1>
        <div className="flex flex-wrap justify-center gap-12">
          {competitionsData.map((competition, index) => (
            <Competition key={index} {...competition} />
          ))}
        </div>
      </div>
      <Footer className="mt-auto py-6" />
    </div>
  );
};

export default Competitions;
