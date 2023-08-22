import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Route,  Routes, Link } from "react-router-dom";
import "virtual:uno.css";
import Add from "./pages/add.tsx";
import CreateCategory from "./createCategory.tsx"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Link className="p-2 rounded no-underline bg-blue-5"  to="/add">
        +
      </Link>

      <Routes>
        <Route index path="*"  element={<App />} />
        
        <Route  path="/add"  element={<Add/>} />
        
        <Route  path="/createCategory"  element={<CreateCategory />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
