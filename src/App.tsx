import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home, About, Post, NotFound } from "./pages";
import { Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-chardon">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/:slug" element={<Post />} />
          <Route path="/articles" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
