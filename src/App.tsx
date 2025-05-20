import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, About, Post, NotFound } from "./pages";
import { Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
