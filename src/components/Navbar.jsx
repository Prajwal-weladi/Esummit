import { signInWithPopup, auth, provider } from "../firebaseConfig"; // ✅ Import Firebase Auth
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // 🔹 Google Sign-In Function
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/profile"); // ✅ Redirect to Profile after login
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {[
                { name: "Home", path: "/" },
                { name: "Competition", path: "/competitions" },
                { name: "E-talks", path: "/etalks" },
                { name: "About", path: "/#about" },
                { name: "Contact", path: "/#contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="nav-hover-btn"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link to="/startup-showcase" className="nav-hover-btn">
                Startup Showcase
              </Link>
              
              {/* 🔹 Register Button in Navbar */}
              {user ? (
                <Link to="/profile" className="nav-hover-btn">
                  Profile
                </Link>
              ) : (
                <button
                  onClick={handleGoogleSignIn}
                  className="nav-hover-btn text-blue-500 font-semibold"
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
