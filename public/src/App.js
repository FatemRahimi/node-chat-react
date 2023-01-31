import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./Message";
import Navbar from "./Navbar";
import Form from "./Form";

function App() {
  //, timeSent: new Date().toLocaleDateString()

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="body-wrapper">
              <h2>Send a message</h2>

              <Form />
            </div>
          }
        />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
