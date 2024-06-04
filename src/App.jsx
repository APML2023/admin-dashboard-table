import '../src/style/App.css'
import '../src/style/Table.css'
import '../src/style/Sidebar.css'
import '../src/style/Button.css'
import '../src/style/Filter.css'
import Login from './component/Login.jsx'
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Table from './component/table'

const App = () => {
  const token = localStorage.getItem("username");
  const [loggedOut,setLoggedOut] = useState(token == null)

  if (loggedOut &&  window.location.pathname != "/")  {
    window.location.href = "/"
  }
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Table/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
