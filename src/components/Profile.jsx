import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.email) {
        setCurrentUser(user);
        fetchRegisteredEvents(user.email);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Fetch Registered Events from Google Sheets API
  const fetchRegisteredEvents = async (userEmail) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwI2J4__N86DvUtL5AqKsfEmYlPvpi7JcZuwBVACSoAYiie1MnUNxYDUXIybVTF1EYZXQ/exec"
      );
      const data = await response.json();

      // Find the row corresponding to the logged-in user
      const userRow = data.find((row) => row.Email === userEmail);
      if (userRow) {
        setRegisteredEvents(userRow["Registered Events"].split(", "));
      } else {
        setRegisteredEvents([]); // No events found
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg text-center">
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

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Registered Events
          </h3>
          <div className="space-y-4">
            {registeredEvents.length > 0 ? (
              registeredEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-700 p-4 rounded-lg"
                >
                  <span className="text-white text-lg font-medium">
                    {event}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No events registered.</p>
            )}
          </div>
        </div>

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