import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const speakers = [
  {
    id: 1,
    name: "Mr. Ashneer Grover",
    position: "Founder | BharatPe",
    image: "/assets/speakers/img1.jpg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 2,
    name: "Mr. Udit Kumar Goyal",
    position: "COO | Google Cloud India",
    image: "/assets/speakers/img2.jpg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 3,
    name: "Mr. Sunny Garg",
    position: "Co-Founder & CEO | CRIB",
    image: "/assets/speakers/img3.jpg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 4,
    name: "Vijender Chauhan",
    position: "Drishti IAS | Interviewer",
    image: "/assets/speakers/img4.JPG",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 5,
    name: "Dr. Gajendra Purohit",
    position: "Founder | Mathscare",
    image: "/assets/speakers/img5.jpeg",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 6,
    name: "Mr. Suresh Prabhu",
    position: "Former Union Minister",
    image: "/assets/speakers/img6.JPG",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 7,
    name: "Mr. Vivek Atray",
    position: "Co-Founder | Playwrite",
    image: "/assets/speakers/img7.JPG",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  {
    id: 8,
    name: "Dr. Anil Lamba",
    position: "Financial Literacy Activist",
    image: "/assets/speakers/img8.webp",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  }
];

const Card = ({ speaker }) => {
  return (
    <div className="h-fit my-6 mx-6 w-44 md:w-56 flex flex-col items-center gap-4 bg-[#1E1E1E] p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <div className="flex justify-center rounded-full overflow-hidden">
        <img
          alt={speaker.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          src={speaker.image}
        />
      </div>
      <div className="text-center">
        <h1 className="uppercase text-lg md:text-2xl font-bold bg-gradient-to-br from-[#4A90E2] via-[#8ECAE6] to-[#3A86FF] bg-clip-text text-transparent">
          {speaker.name}
        </h1>
        <p className="font-light uppercase text-sm md:text-base text-gray-300">
          {speaker.position}
        </p>
        <div className="flex gap-4 mt-3 text-lg text-gray-400">
          <a
            href={speaker.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={speaker.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Speakers() {
  return (
    <section id="speakers" className="px-10 md:px-20 py-16 bg-[#0E0E0E]">
      <div className="flex flex-col items-center pb-8 text-center">
        <h1 className="uppercase text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-[#4A90E2] via-[#8ECAE6] to-[#3A86FF] bg-clip-text text-transparent tracking-wide">
          Meet Our Speakers
        </h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, delay: 0.5 }}
          className="w-32 md:w-52 h-1 bg-gradient-to-br from-[#4A90E2] via-[#8ECAE6] to-[#3A86FF] mt-6"
        ></motion.div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker) => (
          <Card speaker={speaker} key={speaker.id} />
        ))}
      </div>
    </section>
  );
}
