import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Header } from "./components";

import { Home, About, Article, NotFound } from "./pages";

import "./App.css";

const App = () => (
  <Router>
    <main className="min-h-screen bg-chardon">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/articles" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </Router>
);

export default App;
