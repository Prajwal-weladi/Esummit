import React, { useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(false);

  const startScan = async () => {
    setScanning(true);
    const codeReader = new BrowserMultiFormatReader();
    try {
      const videoInputDevices = await codeReader.listVideoInputDevices();
      
      if (videoInputDevices.length === 0) {
        console.error("No camera devices found.");
        alert("No camera found. Try reconnecting your webcam.");
        setScanning(false);
        return;
      }
  
      // Select the first available camera
      const selectedDeviceId = videoInputDevices[0].deviceId;
  
      // Ensure the video element exists
      const videoElement = document.getElementById("video");
      if (!videoElement) {
        console.error("Video element not found");
        setScanning(false);
        return;
      }
  
      // Start scanning
      await codeReader.decodeFromVideoDevice(selectedDeviceId, videoElement, (result, err) => {
        if (result) {
          setScanResult(result.text);
          sendToGoogleSheets(result.text);
          codeReader.reset();
          setScanning(false);
        }
      });
  
    } catch (error) {
      console.error("QR Scan failed:", error);
      alert("Failed to start the scanner. Check console for details.");
      setScanning(false);
    }
  };
  

  const sendToGoogleSheets = async (scannedData) => {
    const [name, email, event] = scannedData
      .replace("Name: ", "")
      .replace("Email: ", "")
      .replace("Event: ", "")
      .split(", ");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzdB6KW8fhlI73wqDAJPz74zjLz7YoM5alTsWf3lfGFjjZ85THQeI068sunV1PtoxGm/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            event,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log("Entry added:", result);
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Scan QR Code</h2>
      <video id="video" className="border-2 border-blue-500"></video>
      <button
        onClick={startScan}
        className="mt-4 bg-blue-500 px-4 py-2 rounded-lg"
      >
        {scanning ? "Scanning..." : "Start Scan"}
      </button>
      {scanResult && (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg">
          <p>Scanned Data:</p>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
