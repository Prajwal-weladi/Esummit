import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import QRCode from "react-qr-code";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
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

  const fetchRegisteredEvents = async (userEmail) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwKM30cpDBdDbzFl65tzPsLOnF2nc8Fyon-8ptagO6F14hL7pX3UQoyFmuEUIupa3a9zw/exec"
      );
      const data = await response.json();

      const userRow = data.find((row) => row.Email === userEmail);
      if (userRow) {
        setRegisteredEvents(userRow["Registered Events"].split(", "));
      } else {
        setRegisteredEvents([]);
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
                  className="flex items-center justify-between bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition"
                  onClick={() => setSelectedEvent(event)}
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

      {/* QR Code Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl text-white font-semibold mb-4">
              Entry Pass - {selectedEvent}
            </h3>
            <QRCode
              value={`Name: ${currentUser.displayName}, Email: ${currentUser.email}, Event: ${selectedEvent}`}
              size={200}
            />
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
