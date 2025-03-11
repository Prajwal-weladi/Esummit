import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const StartupShowcase = () => {
  const startups = [
    { name: "Tech Innovators", description: "Pioneering AI-driven solutions for businesses.", image: "https://source.unsplash.com/400x400/?startup1" },
    { name: "Eco Future", description: "Sustainable energy solutions for a greener planet.", image: "https://source.unsplash.com/400x400/?startup2" },
    { name: "Health First", description: "Revolutionizing healthcare with smart technology.", image: "https://source.unsplash.com/400x400/?startup3" },
    { name: "FinTech Pro", description: "Bringing secure and fast digital banking solutions.", image: "https://source.unsplash.com/400x400/?startup4" },
    { name: "Auto AI", description: "Self-driving technology that enhances road safety.", image: "https://source.unsplash.com/400x400/?startup5" },
    { name: "EdTech Hub", description: "Transforming education with digital learning tools.", image: "https://source.unsplash.com/400x400/?startup6" },
    { name: "FoodieGo", description: "AI-powered food delivery service with personalization.", image: "https://source.unsplash.com/400x400/?startup7" },
    { name: "CyberShield", description: "Advanced cybersecurity solutions for businesses.", image: "https://source.unsplash.com/400x400/?startup8" },
    { name: "SpaceXplore", description: "Making space travel accessible and affordable.", image: "https://source.unsplash.com/400x400/?startup9" }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="🚀 Startup Showcase"
        subtitle="Discover the most innovative startups shaping the future!"
      />
      
      {/* Information and Video Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <iframe
            className="w-full max-w-3xl h-64 sm:h-80 lg:h-96 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Startup Showcase Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Information Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">What is Startup Showcase?</h2>
          <p className="text-lg text-gray-300 mb-6">
            The Startup Showcase is a platform that highlights groundbreaking startups
            that are pushing the boundaries of technology, business, and innovation.
            Learn about their journey, vision, and the impact they are making.
          </p>
        </div>
      </section>
      
      {/* Startup Grid Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Startups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:border-violet-500 transition border-2 border-transparent h-64 flex items-end"
              style={{ backgroundImage: `url(${startup.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-gray-900 bg-opacity-75 p-4 rounded-b-lg w-full">
                <h3 className="text-xl font-semibold">{startup.name}</h3>
                <p className="text-gray-300 mt-2">{startup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default StartupShowcase;
