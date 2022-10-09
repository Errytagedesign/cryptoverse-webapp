import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
// components
import {
  NavBar,
  Homepage,
  Exchanges,
  News,
  CryptoDetails,
  CryptoCurrencies,
  Footer,
} from "./components/compExport";

// style
import "./App.css";
import "aos/dist/aos.css";

function App() {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className="app">
      <Router>
        <header className="navbar">
          <NavBar />
        </header>
        <main className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges " element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>

          <footer className="footer">
            {" "}
            <Footer />{" "}
          </footer>
        </main>
      </Router>
    </div>
  );
}

export default App;
