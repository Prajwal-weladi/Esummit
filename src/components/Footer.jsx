import { FaDiscord, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://instagram.com/v_edc", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-gradient-to-r from-[#6A5ACD] to-[#5542ff] py-16 text-white shadow-lg mt-[-50px] z-10 font-sans"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-12 md:flex-row text-xl">
        
        {/* Left Section: Contact Details */}
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-xl font-medium">John Doe: +91 98765 43210</p>
          <p className="text-xl font-medium">Jane Smith: +91 87654 32109</p>
        </div>

        {/* Center Section: Socials */}
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold">Socials</h2>
          <div className="flex justify-center gap-8 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white transition-transform duration-300 ease-in-out hover:scale-125 hover:text-gray-200 text-4xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Address */}
        <div className="text-center w-1/3">
          <h2 className="text-3xl font-bold">Address</h2>
          <p className="text-xl font-medium">Vishwakarma Institute of Technology, Pune</p>
          <p className="text-xl font-medium">Bibwewadi, Pune, Maharashtra 411037</p>
        </div>
      </div>

      {/* Centered Logo at the Bottom */}
      <div className="flex justify-center mt-12">
        <img src="img/edclogo.png" alt="V-EDC Logo" className="h-20 w-auto" />
      </div>

      <div className="mt-12 text-center">
        <Link to="/competitions" className="hover:text-gray-300 transition-colors">
          Competitions
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
