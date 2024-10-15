import React from "react";
import logo from "./logo.svg";
import Sidebar from "./Components/sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
