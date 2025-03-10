import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Listen for changes in the auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email) {
        // If the user is logged in and has an email, set as current user
        setCurrentUser(user);
      } else {
        // If not authenticated, redirect to home (or login) page
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  // Show a loading indicator until the auth state is determined
  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  // Dummy registered events (replace with real data as needed)
  const registeredEvents = ["Hackathon", "Webinar on AI", "Startup Meet"];

  // Logout handler
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
        {/* User Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={currentUser.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h2 className="mt-4 text-3xl font-bold text-white">
            {currentUser.displayName}
          </h2>
          <p className="mt-2 text-lg text-gray-300">{currentUser.email}</p>
        </div>

        {/* Registered Events Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Registered Events
          </h3>
          <div className="space-y-4">
            {registeredEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-700 p-4 rounded-lg"
              >
                <img
                  src={currentUser.photoURL}
                  alt="Event Icon"
                  className="w-12 h-12 rounded-full border border-blue-500 mr-4"
                />
                <span className="text-white text-lg font-medium">
                  {event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
