import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components";

import { Home, About, Article, NotFound } from "./pages";

import "./App.css";

const App = () => (
  <HelmetProvider>
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
  </HelmetProvider>
);

export default App;
